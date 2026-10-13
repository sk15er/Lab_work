const lessons = [
  {
    title: "Basic matrix operations",
    aim: "Explore matrix arithmetic, inverses, eigenvalues, and linear systems.",
    idea: "Matrices store values in rows and columns. Their dimensions determine which operations are compatible.",
    focus: "Compare the matrices and inspect how each operation changes their values.",
    graphs: [
      { title: "Matrix A", xLabel: "Element", series: [{ name: "A values", points: [[1, 1], [2, 2], [3, 3], [4, 4]] }] },
      { title: "Matrix B", xLabel: "Element", series: [{ name: "B values", points: [[1, 5], [2, 6], [3, 7], [4, 8]] }] }
    ]
  },
  {
    title: "Graphs and parameter effects",
    aim: "Plot elementary functions and see how their shapes respond to parameters.",
    idea: "Changing a changes the slope or frequency; changing b shifts a function vertically or changes its phase.",
    focus: "Change a and b, then step through the plotted functions.",
    parameters: true,
    graphs: [
      { title: "c × x", series: [{ name: "c = 2", fn: x => 2 * x }] },
      { title: "round(a × x + b)", series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => Math.round(a * x + b) })] },
      { title: "|a × x + b|", series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => Math.abs(a * x + b) })] },
      { title: "sin(a × x + b)", series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => Math.sin(a * x + b) })] },
      { title: "cos(a × x + b)", series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => Math.cos(a * x + b) })] },
      { title: "|sin(a × x + b)|", series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => Math.abs(Math.sin(a * x + b)) })] },
      { title: "|cos(a × x + b)|", series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => Math.abs(Math.cos(a * x + b)) })] },
      { title: "e^(a × x + b)", bounds: [-2, 2], series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => Math.exp(a * x + b) })] },
      { title: "log(a × x + b)", series: [({ a, b }) => ({ name: `a=${a}, b=${b}`, fn: x => a * x + b > 0 ? Math.log(a * x + b) : null })] }
    ]
  },
  {
    title: "Polynomial derivatives",
    aim: "Plot degree-four and degree-five polynomials with their first and second derivatives.",
    idea: "polyder creates derivative coefficients; polyval evaluates those coefficients at every x value.",
    focus: "Compare each polynomial with its slope and curvature graphs.",
    graphs: [
      { title: "Degree 4 polynomial", series: [{ name: "p₄(x)", fn: x => x ** 4 - 3 * x ** 3 + 2 * x ** 2 + 1 }] },
      { title: "Degree 5 polynomial", series: [{ name: "p₅(x)", fn: x => 0.5 * x ** 5 + x ** 4 - 2 * x ** 3 - x ** 2 + 2 * x + 1 }] },
      { title: "First derivative · degree 4", series: [{ name: "p₄′(x)", fn: x => 4 * x ** 3 - 9 * x ** 2 + 4 * x }] },
      { title: "First derivative · degree 5", series: [{ name: "p₅′(x)", fn: x => 2.5 * x ** 4 + 4 * x ** 3 - 6 * x ** 2 - 2 * x + 2 }] },
      { title: "Second derivative · degree 4", series: [{ name: "p₄″(x)", fn: x => 12 * x ** 2 - 18 * x + 4 }] },
      { title: "Second derivative · degree 5", series: [{ name: "p₅″(x)", fn: x => 10 * x ** 3 + 12 * x ** 2 - 12 * x - 2 }] }
    ]
  },
  {
    title: "Limits and differentiation",
    aim: "Evaluate limits and differentiate algebraic and trigonometric functions.",
    idea: "limit studies a function near a point or at infinity; diff returns its derivative.",
    focus: "Compare the original expressions with the behavior around their notable points.",
    graphs: [
      { title: "(x² − 1) / (x − 1)", series: [{ name: "f₁(x)", fn: x => Math.abs(x - 1) < 0.05 ? null : (x * x - 1) / (x - 1) }] },
      { title: "eˣ / x", bounds: [-5, 5], series: [{ name: "f₂(x)", fn: x => Math.abs(x) < 0.05 ? null : Math.exp(x) / x }] },
      { title: "x³ + 2x² − 5x + 3", series: [{ name: "f₃(x)", fn: x => x ** 3 + 2 * x ** 2 - 5 * x + 3 }] },
      { title: "sin(2x) cos(x)", series: [{ name: "f₄(x)", fn: x => Math.sin(2 * x) * Math.cos(x) }] }
    ]
  },
  {
    title: "Taylor series",
    aim: "Approximate sin(x) near zero with a Taylor polynomial.",
    idea: "A Taylor polynomial uses derivatives at a chosen point to approximate a function nearby.",
    focus: "Compare sin(x) with its order-10 expansion around zero.",
    graphs: [
      { title: "sin(x) and its Taylor approximation", series: [
        { name: "sin(x)", fn: x => Math.sin(x) },
        { name: "Taylor order 10", fn: x => x - x ** 3 / 6 + x ** 5 / 120 - x ** 7 / 5040 + x ** 9 / 362880, color: "#d27b3a" }
      ] }
    ]
  },
  {
    title: "Curves and asymptotes",
    aim: "Sketch the hyperbola y = 1/x alongside its horizontal and vertical asymptotes.",
    idea: "An asymptote is a line the curve approaches. The reciprocal curve approaches both axes.",
    focus: "See how the branches approach x = 0 and y = 0 without crossing the vertical asymptote.",
    graphs: [
      { title: "y = 1/x", series: [
        { name: "1/x", fn: x => Math.abs(x) < 0.12 ? null : 1 / x },
        { name: "y = 0", fn: () => 0, color: "#d27b3a" }
      ] }
    ]
  },
  {
    title: "Parametric curves",
    aim: "Plot a circle defined by x(t) = cos(t), y(t) = sin(t).",
    idea: "A parameter t drives both coordinates, so the curve is traced as t changes.",
    focus: "The equal axis scale keeps the parametric circle round.",
    graphs: [
      { title: "Parametric circle", parametric: true, bounds: [-1.2, 1.2], series: [{ name: "(cos t, sin t)", points: Array.from({ length: 161 }, (_, i) => { const t = i * Math.PI * 2 / 160; return [Math.cos(t), Math.sin(t)]; }) }] }
    ]
  }
];

const $ = id => document.getElementById(id);
const STORE = { get(key) { try { return localStorage.getItem(key); } catch { return null; } }, set(key, value) { try { localStorage.setItem(key, value); } catch {} } };
const authorBoxes = [
  { x: 132, top: 402.78659, height: 11.32, prefix: "" },
  { x: 71.99812, top: 275.80159, height: 11.32, prefix: "%" },
  { x: 71.9966, top: 227.80158, height: 11.32, prefix: "%" },
  { x: 72.00091, top: 183.09759, height: 11.32, prefix: "% " },
  { x: 72.00155, top: 183.98079, height: 11.32, prefix: "% " },
  { x: 132.00091, top: 183.09759, height: 11.32, prefix: "" },
  { x: 72.0046, top: 183.98079, height: 11.32, prefix: "% " }
];
let current = 0;
let graphIndex = 0;
let stepIndex = 0;
let codeOriginal = "";
let pdfLibPromise;
let octaveWorker;
let octaveReady;
let activeRun;
let runOutput = "";
let runStderr = "";
let steps = [];

function sourceKey(index) { return `matlab-code-${index + 1}`; }
function sourceText() { return STORE.get(sourceKey(current)) ?? codeOriginal; }
function showOutput(text, className = "") { $("output").className = className; $("output").textContent = text; }
function getParameters() {
  const a = Number($("param-a").value);
  const b = Number($("param-b").value);
  return { a: Number.isFinite(a) ? a : 1, b: Number.isFinite(b) ? b : 0 };
}
function materializeSeries(definition) {
  const params = getParameters();
  return definition.series.map((entry, index) => {
    const series = typeof entry === "function" ? entry(params) : entry;
    if (series.points) return { ...series, color: series.color || ["#167d75", "#d27b3a", "#4e78b8"][index % 3] };
    const [min, max] = definition.bounds || [-5, 5];
    const points = Array.from({ length: 241 }, (_, pointIndex) => {
      const x = min + pointIndex * (max - min) / 240;
      const y = series.fn(x);
      return Number.isFinite(y) ? [x, y] : null;
    });
    return { ...series, points, color: series.color || ["#167d75", "#d27b3a", "#4e78b8"][index % 3] };
  });
}
function drawGraph() {
  const definition = lessons[current].graphs[graphIndex];
  const canvas = $("graph");
  const bounds = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.round(bounds.width * ratio));
  canvas.height = Math.max(1, Math.round(bounds.height * ratio));
  const context = canvas.getContext("2d");
  context.scale(ratio, ratio);
  const width = bounds.width;
  const height = bounds.height;
  const colors = getComputedStyle(document.documentElement);
  const ink = colors.getPropertyValue("--mut").trim();
  const grid = colors.getPropertyValue("--line").trim();
  const series = materializeSeries(definition);
  const allPoints = series.flatMap(item => item.points.filter(Boolean));
  const parametric = Boolean(definition.parametric);
  let xMin = definition.bounds?.[0] ?? Math.min(...allPoints.map(point => point[0]));
  let xMax = definition.bounds?.[1] ?? Math.max(...allPoints.map(point => point[0]));
  let yMin = Math.min(...allPoints.map(point => point[1]));
  let yMax = Math.max(...allPoints.map(point => point[1]));
  if (!Number.isFinite(yMin) || !Number.isFinite(yMax)) { yMin = -1; yMax = 1; }
  if (!parametric && yMin <= 0 && yMax >= 0) { yMin = Math.min(yMin, 0); yMax = Math.max(yMax, 0); }
  if (yMax === yMin) { yMax += 1; yMin -= 1; }
  const yPadding = (yMax - yMin) * 0.08;
  yMin -= yPadding; yMax += yPadding;
  if (parametric) { const extent = Math.max(Math.abs(xMin), Math.abs(xMax), Math.abs(yMin), Math.abs(yMax)); xMin = -extent; xMax = extent; yMin = -extent; yMax = extent; }
  const plot = { left: 40, right: width - 12, top: 12, bottom: height - 28 };
  const xAt = value => plot.left + (value - xMin) / (xMax - xMin) * (plot.right - plot.left);
  const yAt = value => plot.bottom - (value - yMin) / (yMax - yMin) * (plot.bottom - plot.top);

  context.clearRect(0, 0, width, height);
  context.font = "10px Inter, system-ui, sans-serif";
  context.lineWidth = 1;
  for (let line = 0; line <= 4; line++) {
    const y = plot.top + line * (plot.bottom - plot.top) / 4;
    context.strokeStyle = grid;
    context.beginPath(); context.moveTo(plot.left, y); context.lineTo(plot.right, y); context.stroke();
    const value = yMax - line * (yMax - yMin) / 4;
    context.fillStyle = ink;
    context.fillText(Number(value.toPrecision(3)).toString(), 3, y + 3);
  }
  const zeroY = yMin <= 0 && yMax >= 0 ? yAt(0) : plot.bottom;
  context.strokeStyle = ink;
  context.beginPath(); context.moveTo(plot.left, zeroY); context.lineTo(plot.right, zeroY); context.stroke();
  if (xMin <= 0 && xMax >= 0) {
    context.beginPath(); context.moveTo(xAt(0), plot.top); context.lineTo(xAt(0), plot.bottom); context.stroke();
  }
  for (const line of series) {
    context.strokeStyle = line.color;
    context.lineWidth = 2;
    context.beginPath();
    let open = false;
    for (const point of line.points) {
      if (!point) { open = false; continue; }
      const [x, y] = point;
      if (!Number.isFinite(x) || !Number.isFinite(y)) { open = false; continue; }
      if (open) context.lineTo(xAt(x), yAt(y));
      else { context.moveTo(xAt(x), yAt(y)); open = true; }
    }
    context.stroke();
  }
  context.fillStyle = ink;
  context.textAlign = "center";
  context.fillText(definition.xLabel || (parametric ? "x(t)" : "x"), (plot.left + plot.right) / 2, height - 7);
  const legend = series.map(item => item.name).filter(Boolean);
  if (legend.length > 1) {
    let legendX = plot.left + 4;
    for (const item of series) {
      context.fillStyle = item.color;
      context.fillRect(legendX, 7, 8, 8);
      context.fillStyle = ink;
      context.textAlign = "left";
      context.fillText(item.name, legendX + 11, 15);
      legendX += context.measureText(item.name).width + 22;
    }
  }
  $("graph-title").textContent = definition.title;
  $("graph-count").textContent = `${graphIndex + 1} / ${lessons[current].graphs.length}`;
  $("graph-caption").textContent = definition.parametric ? "t: 0 to 2π" : (series.length > 1 ? series.map(item => item.name).join(" · ") : (series[0]?.name || ""));
  $("graph-prev").disabled = graphIndex === 0;
  $("graph-next").disabled = graphIndex === lessons[current].graphs.length - 1;
  canvas.setAttribute("aria-label", `${definition.title}. ${$("graph-caption").textContent}`);
}
function render() {
  const lesson = lessons[current];
  $("programs").innerHTML = lessons.map((_, index) => `<button class="chip ${index === current ? "on" : ""}" data-program="${index}" aria-label="Program ${index + 1}" aria-current="${index === current ? "step" : "false"}">${index + 1}</button>`).join("");
  $("eyebrow").textContent = `MATLAB PROGRAM ${String(current + 1).padStart(2, "0")} / ${lessons.length}`;
  $("title").textContent = lesson.title;
  $("aim").textContent = lesson.aim;
  $("idea").textContent = lesson.idea;
  $("focus").textContent = lesson.focus;
  $("report-program").textContent = `Program ${current + 1}`;
  $("params").hidden = !lesson.parameters;
  $("param-a").value = "1";
  $("param-b").value = "0";
  graphIndex = 0;
  showOutput("Run your MATLAB code to see the result.");
  $("status").textContent = "";
  $("explain-body").hidden = true;
  $("explain-toggle").setAttribute("aria-expanded", "false");
  $("explain-arrow").textContent = "＋";
  $("publish-status").textContent = "";
  $("editor").value = "Loading MATLAB source…";
  fetch(`./matlab/codes/program_${current + 1}.m`)
    .then(response => { if (!response.ok) throw new Error(`Could not load program ${current + 1}.`); return response.text(); })
    .then(source => {
      codeOriginal = source;
      $("editor").value = sourceText();
      drawGraph();
    })
    .catch(error => { $("editor").value = ""; showOutput(error.message, "bad"); });
  const activeChip = $("programs").querySelector(".chip.on");
  activeChip?.scrollIntoView({ inline: "center", block: "nearest" });
}
function selectProgram(index) {
  current = Math.max(0, Math.min(lessons.length - 1, index));
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function theme(value) {
  document.documentElement.dataset.theme = value;
  $("theme").textContent = value === "dark" ? "☀ Light" : "☾ Dark";
  STORE.set("theme", value);
  requestAnimationFrame(drawGraph);
}
function explanationSteps() {
  return $("editor").value.split("\n").flatMap(raw => {
    const code = raw.trim();
    if (!code || code.startsWith("%") || code.startsWith("...") || code === "end") return [];
    let text = "This line stores or transforms a value used by the example.";
    if (/^close all|^clc/.test(code)) text = "This clears old figures and console output before the program starts.";
    else if (/^syms\b/.test(code)) text = "This declares a symbolic variable so Octave can work with exact expressions.";
    else if (/\blimit\(/.test(code)) text = "This evaluates how the expression behaves as x approaches a chosen point.";
    else if (/\bdiff\(/.test(code)) text = "This computes the derivative of the expression with respect to x.";
    else if (/\btaylor\(/.test(code)) text = "This builds a polynomial approximation from derivatives around the selected point.";
    else if (/\bpolyder\(/.test(code)) text = "This derives the coefficient list for the polynomial's derivative.";
    else if (/\bpolyval\(/.test(code)) text = "This evaluates a polynomial at each value in the x array.";
    else if (/\bplot\(/.test(code)) text = "This draws the current x and y values as a graph.";
    else if (/\bfigure\(/.test(code)) text = "This opens a separate figure for the next graph.";
    else if (/\blinspace\(/.test(code)) text = "This creates evenly spaced values across the selected interval.";
    else if (/^for\b/.test(code)) text = "This repeats the indented commands for each value in the list.";
    else if (/\bdisp\(|\bfprintf\(/.test(code)) text = "This writes a result to the command output.";
    else if (/\baxis\s+equal/.test(code)) text = "This uses the same scale on both axes so lengths are not distorted.";
    return [{ code, text }];
  });
}
function drawStep() {
  if (!steps.length) steps = explanationSteps();
  stepIndex = Math.max(0, Math.min(stepIndex, steps.length - 1));
  const step = steps[stepIndex] || { code: "Your code", text: "Add a few lines of code, then open this guide again." };
  $("step-count").textContent = `STEP ${stepIndex + 1} OF ${steps.length || 1}`;
  $("step-code").textContent = step.code;
  $("step-text").textContent = step.text;
  $("step-prev").disabled = stepIndex === 0;
  $("step-next").disabled = stepIndex >= steps.length - 1;
  $("step-next").textContent = stepIndex >= steps.length - 1 ? "That's it ✓" : "Next →";
}
async function runCode() {
  const button = $("run");
  button.disabled = true;
  button.textContent = "Running…";
  $("status").textContent = "Starting Octave WebAssembly";
  $("output").closest(".card").scrollIntoView({ behavior: "smooth", block: "center" });
  try {
    await ensureOctave();
    runOutput = "";
    runStderr = "";
    const result = await new Promise((resolve, reject) => {
      activeRun = { resolve, reject };
      octaveWorker.postMessage({ type: "execute", code: $("editor").value });
    });
    let runtimeError = result.error || "";
    if (/macros\.texi|symbolic package|\bsyms\b/i.test(`${runtimeError}\n${runStderr}`)) {
      runtimeError = `This program needs symbolic algebra, which is not included in the static browser runtime. The graph and source remain available; use Open Octave Online for symbolic execution.\n\n${runtimeError}`;
    }
    const output = [runOutput.trim(), runStderr.trim(), runtimeError].filter(Boolean).join("\n").trim();
    if (result.status !== 0 || result.error) {
      showOutput(output || "The program stopped with an error.", "bad");
      $("status").textContent = "Run error";
    } else {
      showOutput(output || "Program finished. Its graph is shown above; no text was printed.", "ok");
      $("status").textContent = "✓ Finished";
    }
  } catch (error) {
    const message = error.message || "Could not start Octave WebAssembly.";
    showOutput(message, "bad");
    $("status").textContent = "Could not run";
  } finally {
    button.disabled = false;
    button.textContent = "▶ Run MATLAB";
    requestAnimationFrame(() => $("output").closest(".card").scrollIntoView({ behavior: "smooth", block: "center" }));
  }
}
function ensureOctave() {
  if (octaveReady) return octaveReady;
  $("output").textContent = "Loading Octave WebAssembly from this site. The first load is about 20 MB and is cached by your browser afterward.";
  octaveWorker = new Worker("./matlab-worker.js");
  octaveReady = new Promise((resolve, reject) => {
    const startupTimeout = setTimeout(() => {
      octaveWorker.terminate();
      octaveWorker = null;
      octaveReady = null;
      reject(new Error("Octave WebAssembly took too long to start. Check your connection and try again."));
    }, 120000);
    octaveWorker.onmessage = event => {
      const message = event.data || {};
      if (message.type === "output") {
        if (message.stream === "stderr") runStderr += `${message.text}\n`;
        else runOutput += `${message.text}\n`;
      } else if (message.type === "status") {
        $("status").textContent = message.text;
      } else if (message.type === "ready") {
        clearTimeout(startupTimeout);
        resolve();
      } else if (message.type === "complete" || message.type === "failure") {
        if (activeRun) {
          const pending = activeRun;
          activeRun = null;
          message.type === "complete" ? pending.resolve(message) : pending.reject(new Error(message.error));
        }
      } else if (message.type === "fatal") {
        clearTimeout(startupTimeout);
        octaveWorker.terminate();
        octaveWorker = null;
        octaveReady = null;
        reject(new Error(`Could not load Octave WebAssembly: ${message.error}`));
      }
    };
    octaveWorker.onerror = event => {
      clearTimeout(startupTimeout);
      octaveWorker?.terminate();
      octaveWorker = null;
      octaveReady = null;
      reject(new Error(event.message || "Could not load the Octave WebAssembly files."));
    };
  });
  return octaveReady;
}
function loadPdfLib() {
  if (window.PDFLib) return Promise.resolve(window.PDFLib);
  if (!pdfLibPromise) {
    pdfLibPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "./vendor/pdf-lib/pdf-lib.min.js";
      script.onload = () => resolve(window.PDFLib);
      script.onerror = () => { pdfLibPromise = null; reject(new Error("Could not load the PDF publishing library.")); };
      document.head.append(script);
    });
  }
  return pdfLibPromise;
}
async function publishPdf() {
  const name = $("student-name").value.trim();
  const status = $("publish-status");
  if (!/^[\p{L}\p{M}][\p{L}\p{M} .'-]{0,39}$/u.test(name)) {
    status.textContent = "Enter a name using letters, spaces, apostrophes, or hyphens.";
    status.className = "publish-status bad";
    return;
  }
  const button = $("publish");
  button.disabled = true;
  status.className = "publish-status";
  status.textContent = "Preparing report…";
  try {
    const [PDFLib, response] = await Promise.all([
      loadPdfLib(),
      fetch(`./matlab/pdf/program_${current + 1}.pdf`)
    ]);
    if (!response.ok) throw new Error("The supplied PDF template could not be loaded.");
    const pdf = await PDFLib.PDFDocument.load(await response.arrayBuffer());
    const page = pdf.getPages()[0];
    const box = authorBoxes[current];
    const font = await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
    const y = page.getHeight() - box.top - box.height;
    const label = `${box.prefix}${name}`;
    const size = Math.min(9, 210 / font.widthOfTextAtSize(label, 1));
    page.drawRectangle({ x: box.x, y: y - 1, width: 225, height: box.height + 3, color: PDFLib.rgb(1, 1, 1) });
    page.drawText(label, { x: box.x, y: y + 1, size, font, color: PDFLib.rgb(0.08, 0.09, 0.11) });
    const bytes = await pdf.save();
    const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `program_${current + 1}_${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
    status.textContent = "Personalized report downloaded.";
    status.className = "publish-status ok";
  } catch (error) {
    status.textContent = error.message || "Could not publish the report.";
    status.className = "publish-status bad";
  } finally { button.disabled = false; }
}

$("programs").addEventListener("click", event => {
  const button = event.target.closest("[data-program]");
  if (button) selectProgram(Number(button.dataset.program));
});
$("editor").addEventListener("input", () => STORE.set(sourceKey(current), $("editor").value));
$("editor").addEventListener("keydown", event => {
  if (event.key === "Tab") {
    event.preventDefault();
    const editor = event.currentTarget;
    editor.setRangeText("    ", editor.selectionStart, editor.selectionEnd, "end");
    STORE.set(sourceKey(current), editor.value);
  }
});
$("theme").onclick = () => theme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
$("previous").onclick = () => selectProgram(current - 1);
$("next").onclick = () => selectProgram(current + 1);
$("run").onclick = runCode;
$("reset").onclick = () => { STORE.set(sourceKey(current), codeOriginal); $("editor").value = codeOriginal; };
$("copy").onclick = async () => {
  try { await navigator.clipboard.writeText($("editor").value); $("copy").textContent = "Copied ✓"; }
  catch { $("copy").textContent = "Select code to copy"; }
  setTimeout(() => { $("copy").textContent = "Copy"; }, 1400);
};
$("online").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText($("editor").value); showOutput("Code copied. Paste it into Octave Online to run it.", "ok"); }
  catch { showOutput("Octave Online opened. Copy the code from the editor to run it there."); }
});
$("graph-prev").onclick = () => { if (graphIndex > 0) { graphIndex--; drawGraph(); } };
$("graph-next").onclick = () => { if (graphIndex < lessons[current].graphs.length - 1) { graphIndex++; drawGraph(); } };
$("param-a").oninput = drawGraph;
$("param-b").oninput = drawGraph;
$("publish").onclick = publishPdf;
$("explain-toggle").onclick = () => {
  const open = $("explain-body").hidden;
  $("explain-body").hidden = !open;
  $("explain-toggle").setAttribute("aria-expanded", String(open));
  $("explain-arrow").textContent = open ? "−" : "＋";
  if (open) { steps = explanationSteps(); stepIndex = 0; drawStep(); }
};
$("step-prev").onclick = () => { stepIndex--; drawStep(); };
$("step-next").onclick = () => { stepIndex++; drawStep(); };
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") { event.preventDefault(); runCode(); }
});
window.addEventListener("resize", drawGraph);
theme(STORE.get("theme") === "dark" ? "dark" : "light");
render();