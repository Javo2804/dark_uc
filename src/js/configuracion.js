function setDark(estado) {
    chrome.storage.sync.set({dark: estado});
}