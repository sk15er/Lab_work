#!/usr/bin/env python3
"""Copy the repository's MATLAB examples byte-for-byte to an output folder."""
import argparse
import shutil
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SOURCE_DIR = REPO_ROOT / "matlab" / "codes"
DEFAULT_OUTPUT_DIR = REPO_ROOT / "matlab" / "generated_codes"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT_DIR)
    output_dir = parser.parse_args().output.expanduser().resolve()
    sources = sorted(SOURCE_DIR.glob("*.m"))
    if not sources:
        raise SystemExit(f"No MATLAB source files found in {SOURCE_DIR}")

    output_dir.mkdir(parents=True, exist_ok=True)
    for source in sources:
        shutil.copyfile(source, output_dir / source.name)
    print(f"Copied {len(sources)} MATLAB programs to: {output_dir}")


if __name__ == "__main__":
    main()