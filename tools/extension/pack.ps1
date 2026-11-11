# Builds the browser extension for each browser family from extension/ (one background.js):
#   target/extension/chromium/  - manifest.json (Chrome, Edge, Brave, Opera, Vivaldi; load unpacked)
#   target/extension/firefox/   - manifest.firefox.json as manifest.json
#   target/extension/safari/    - manifest.safari.json as manifest.json (a folder only: tools/safari
#                                 builds it into the app as Safari's extension, macOS)
#   target/extension/razdm-extension-chrome.zip - the chromium folder, zipped (direct release download)
#   target/extension/razdm-extension-firefox.xpi - the firefox folder, zipped (direct release download)
# Both manifests get the app's version (Cargo.toml), so an extension and its app always match.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$src = Join-Path $root "extension"
# Joined part by part: .NET (the zips below) takes a backslash literally on Linux and macOS.
$out = Join-Path (Join-Path $root "target") "extension"
$cargo = Get-Content (Join-Path $root "Cargo.toml") -Raw
$version = [regex]::Match($cargo, '(?m)^version\s*=\s*"([^"]+)"').Groups[1].Value
if (-not $version) { throw "no version in Cargo.toml" }
# The stores take one to four dot-separated numbers only (no "-rc.1").
if ($version -notmatch '^\d+(\.\d+){0,3}$') { throw "version ${version}: browsers take only numbers like 1.2.3" }
foreach ($kind in "chromium", "firefox", "safari") {
  $dir = Join-Path $out $kind
  if (Test-Path $dir) { Remove-Item -LiteralPath $dir -Recurse -Force }
  New-Item -ItemType Directory -Force $dir | Out-Null
  # The background part; the download button over videos and the Alt-click watcher (content
  # scripts in every page); the toolbar button's popup.
  foreach ($f in "background.js", "video.js", "page.js", "popup.html", "popup.css", "popup.js") {
    Copy-Item (Join-Path $src $f) $dir
  }
  Copy-Item (Join-Path $src "icons") (Join-Path $dir "icons") -Recurse
  # Its texts in the browser's language (tools/extension/locales.py).
  Copy-Item (Join-Path $src "_locales") (Join-Path $dir "_locales") -Recurse
  # Norwegian: Chrome takes only "no", Firefox looks for "nb" (Bokmål) as its users' browsers say.
  if ($kind -eq "firefox" -and (Test-Path (Join-Path $dir "_locales/no"))) {
    Copy-Item (Join-Path $dir "_locales/no") (Join-Path $dir "_locales/nb") -Recurse
  }
  $manifest = switch ($kind) { "firefox" { "manifest.firefox.json" } "safari" { "manifest.safari.json" } default { "manifest.json" } }
  $json = Get-Content (Join-Path $src $manifest) -Raw
  # The first "version" only (the manifest's own).
  $json = ([regex]'("version"\s*:\s*)"[^"]*"').Replace($json, "`${1}`"$version`"", 1)
  [IO.File]::WriteAllText((Join-Path $dir "manifest.json"), $json, (New-Object Text.UTF8Encoding $false))
}
# The Chrome Web Store's copy of the chromium folder. The store signs it with its own key (it
# refuses a manifest that carries "key"; the native host knows both IDs).
$store = Join-Path $out "chrome-store"
if (Test-Path $store) { Remove-Item -LiteralPath $store -Recurse -Force }
Copy-Item (Join-Path $out "chromium") $store -Recurse
$manifest = Get-Content (Join-Path $store "manifest.json") -Raw | ConvertFrom-Json
$manifest.PSObject.Properties.Remove("key")
$json = $manifest | ConvertTo-Json -Depth 10
[IO.File]::WriteAllText((Join-Path $store "manifest.json"), $json, (New-Object Text.UTF8Encoding $false))
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
# The zips have manifest.json at their root. Entries are named with "/" as zip requires
# (Windows PowerShell's CreateFromDirectory writes "\", which Firefox rejects).
foreach ($pair in @(
    @("chromium", "razdm-chromium.zip"),
    @("firefox", "razdm-firefox.xpi"),
    @("chrome-store", "razdm-chrome-store.zip"),
    @("chromium", "razdm-extension-chrome.zip"),
    @("firefox", "razdm-extension-firefox.xpi")
)) {
  $dir = (Resolve-Path (Join-Path $out $pair[0])).Path
  $zip = Join-Path $out $pair[1]
  if (Test-Path $zip) { Remove-Item -LiteralPath $zip -Force }
  $archive = [System.IO.Compression.ZipFile]::Open($zip, [System.IO.Compression.ZipArchiveMode]::Create)
  try {
    foreach ($f in Get-ChildItem -LiteralPath $dir -Recurse -File | Sort-Object FullName) {
      $name = $f.FullName.Substring($dir.Length).TrimStart('\', '/').Replace('\', '/')
      [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $f.FullName, $name)
    }
  } finally { $archive.Dispose() }
}

# Copy direct download extensions to website assets & target dist
$webExt = Join-Path $root "website\assets\extension"
if (-not (Test-Path $webExt)) { New-Item -ItemType Directory -Force $webExt | Out-Null }
Copy-Item (Join-Path $out "razdm-extension-chrome.zip") (Join-Path $webExt "razdm-extension-chrome.zip") -Force
Copy-Item (Join-Path $out "razdm-extension-firefox.xpi") (Join-Path $webExt "razdm-extension-firefox.xpi") -Force

$dist = Join-Path $root "target\dist"
if (Test-Path $dist) {
  Copy-Item (Join-Path $out "razdm-extension-chrome.zip") (Join-Path $dist "RAZDownloadManager-$version-extension-chrome.zip") -Force
  Copy-Item (Join-Path $out "razdm-extension-firefox.xpi") (Join-Path $dist "RAZDownloadManager-$version-extension-firefox.xpi") -Force
}

"built $out (chromium, firefox, safari, razdm-extension-chrome.zip, razdm-extension-firefox.xpi; version $version)"
