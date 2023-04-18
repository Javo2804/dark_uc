// chrome.runtime.onInstalled.addListener(function() {
//     chrome.tabs.create({ url: chrome.runtime.getURL("actualizacion.html") });
// });

chrome.runtime.onInstalled.addListener(function(object) {
    if (object.reason == "install" || object.reason == "update") {
        chrome.tabs.create({ url: chrome.runtime.getURL("actualizacion.html") });
        chrome.storage.local.set({
            setcanvas: false,
        });
    }    
});
