# Browser dependencies

The MATLAB page is static and does not require a Python server. Its first run
loads these files from this repository, then the browser caches them:

- `octave-wasm/` contains the GNU Octave 7.2 WebAssembly build from
  `@liudonghua123/octave-wasm` 0.0.1. The runtime is about 20 MB and is licensed
  under the BSD 3-Clause license; see `octave-wasm/LICENSE`.
- `pdf-lib/` contains `pdf-lib` 1.17.1 under the MIT license; see
  `pdf-lib/LICENSE.md`.

The browser runtime does not include Octave's symbolic package. Programs that
use `syms`, `limit`, `diff`, or `taylor` need a full Octave installation or an
online Octave service. The MATLAB page explains this when such code fails.

FOP C/C++ compilation continues to use Wandbox's public API, so compiling those
lessons requires internet access. GitHub Pages itself serves the site and all
bundled MATLAB/PDF assets as static files.