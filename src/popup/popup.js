var manifestData = chrome.runtime.getManifest();
var version = manifestData.version;
document.getElementById("version").innerHTML = "v"+version


// document.querySelector('#ir-config').addEventListener('click', function() {
//   if (chrome.runtime.openOptionsPage) {
//     chrome.runtime.openOptionsPage();
//   } else {
//     window.open(chrome.runtime.getURL('config.html'));
//   }
// });

// document.querySelector('#openconfig').addEventListener('click', function() {
//   var x = document.querySelector('#config1');
//   if (x.style.display === "none") {
//     x.style.display = "block";
//     document.getElementById('')
//   } else {
//     x.style.display = "none";
//   }
// });