function setDark(estado) {
    chrome.storage.local.set({dark: estado});
}