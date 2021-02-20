var manifestData = chrome.runtime.getManifest();
var version = manifestData.version;
document.getElementById("version").innerHTML = "v"+version