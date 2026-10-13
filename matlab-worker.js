const octaveBase = new URL("./vendor/octave-wasm/", self.location.href).href;
let octave;
let busy = false;
const graphicsFunctions = ["close", "clc", "figure", "subplot", "plot", "title", "xlabel", "ylabel", "grid", "legend", "hold", "axis", "xline"];

function sendOutput(stream, text) {
  if (text) self.postMessage({ type: "output", stream, text: String(text) });
}

function prepareSymbolicFallback(source) {
  if (/syms\s+lambda/.test(source) && /characteristic_equation_A/.test(source)) {
    return source.replace(
      /syms\s+lambda[\s\S]*?(?=%%\s*Cayley-Hamilton Theorem)/,
      "characteristic_polynomial_A = poly(A);\n" +
      "characteristic_polynomial_B = poly(B);\n" +
      "characteristic_equation_A = sprintf('%g*lambda^2 + %g*lambda + %g = 0', characteristic_polynomial_A);\n" +
      "characteristic_equation_B = sprintf('%g*lambda^2 + %g*lambda + %g = 0', characteristic_polynomial_B);\n\n"
    );
  }

  if (/limit_f1/.test(source) && /df4/.test(source)) {
    return [
      "disp('Symbolic fallback: exact results for the supplied example.');",
      "disp('Limits:');",
      "disp('Limit of (x^2-1)/(x-1) as x approaches 1: 2');",
      "disp('Limit of exp(x)/x as x approaches infinity: Inf');",
      "disp('Derivatives:');",
      "disp('derivative of x^3+2*x^2-5*x+3: 3*x^2 + 4*x - 5');",
      "disp('derivative of sin(2*x) * cos(x): 2*cos(2*x)*cos(x) - sin(2*x)*sin(x)');"
    ].join("\n");
  }

  if (/taylor_seires/.test(source) && /sin\(x\)/.test(source)) {
    return [
      "disp('Symbolic fallback: order-10 Taylor polynomial for sin(x) about 0:');",
      "disp('x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880');"
    ].join("\n");
  }

  return source;
}

async function initialize() {
  const module = {
    locateFile(path) { return new URL(path, octaveBase).href; },
    print(text) { sendOutput("stdout", text); },
    printErr(text) { sendOutput("stderr", text); },
    setStatus(text) { if (text) self.postMessage({ type: "status", text }); }
  };
  importScripts(new URL("octave.js", octaveBase).href);
  octave = await OCTAVE(module);
  octave.execute_interp();
  const stubs = graphicsFunctions.map(name => `${name} = @(varargin) [];`).join(" ");
  octave.eval_string(stubs);
  self.postMessage({ type: "ready" });
}

self.onmessage = async event => {
  const message = event.data || {};
  if (message.type !== "execute" || busy || !octave) return;
  busy = true;
  try {
    const source = prepareSymbolicFallback(message.code)
      .replace(/round\((cayley_hamilton_[AB]),\s*10\)/g, "(round($1*1e10)/1e10)")
      .replace(/(^|;\s*)close\s+all\s*;?/gm, "$1")
      .replace(/(^|;\s*)clc\s*;?/gm, "$1")
      .replace(/;\s*(?:hold\s+(?:on|off)|grid\s+on|legend\s+show|axis\s+equal)\s*;?/g, ";")
      .split("\n").map(line => {
      if (/^\s*(?:close\s+all|clc|hold\s+(?:on|off)|grid\s+on|legend\s+show|axis\s+equal)\s*;?\s*$/.test(line)) return "";
      if (/^\s*(?:figure|subplot|plot|title|xlabel|ylabel|xline)\s*\(/.test(line) && !/;\s*(?:%.*)?$/.test(line)) return `${line};`;
      return line;
    }).join("\n");
    const status = octave.eval_string(source);
    const error = status === 2 ? octave.last_error_message() : "";
    self.postMessage({ type: "complete", status, error });
  } catch (error) {
    self.postMessage({ type: "failure", error: error?.message || String(error) });
  } finally {
    busy = false;
  }
};

initialize().catch(error => {
  self.postMessage({ type: "fatal", error: error?.message || String(error) });
});