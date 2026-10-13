const octaveBase = new URL("./vendor/octave-wasm/", self.location.href).href;
let octave;
let busy = false;
const graphicsFunctions = ["close", "clc", "figure", "subplot", "plot", "title", "xlabel", "ylabel", "grid", "legend", "hold", "axis", "xline"];

function sendOutput(stream, text) {
  if (text) self.postMessage({ type: "output", stream, text: String(text) });
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
    const source = message.code
      .replace(/(^|;\s*)close\s+all\s*;?/gm, "$1")
      .replace(/(^|;\s*)clc\s*;?/gm, "$1")
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