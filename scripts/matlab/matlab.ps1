param(
    [string]$OutputDirectory
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$sourceDirectory = Join-Path $repoRoot "matlab/codes"

if ([string]::IsNullOrWhiteSpace($OutputDirectory)) {
    $OutputDirectory = Join-Path $repoRoot "matlab/generated_codes"
}

if (-not (Test-Path -LiteralPath $sourceDirectory -PathType Container)) {
    throw "MATLAB source directory not found: $sourceDirectory"
}

New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null
$sources = Get-ChildItem -LiteralPath $sourceDirectory -Filter "*.m" -File
if ($sources.Count -eq 0) {
    throw "No MATLAB source files found in $sourceDirectory"
}

foreach ($source in $sources) {
    Copy-Item -LiteralPath $source.FullName -Destination (Join-Path $OutputDirectory $source.Name) -Force
}

Write-Host "Copied $($sources.Count) MATLAB programs to: $OutputDirectory"