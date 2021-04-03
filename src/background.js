// chrome.runtime.onInstalled.addListener(function() {
//     chrome.tabs.create({ url: chrome.runtime.getURL("actualizacion.html") });
// });

chrome.runtime.onInstalled.addListener(function(object) {
    if (object.reason == "install") {
        chrome.tabs.create({ url: chrome.runtime.getURL("actualizacion.html") });
        chrome.storage.sync.set({
            setcanvas: false,
        });
    }    
});