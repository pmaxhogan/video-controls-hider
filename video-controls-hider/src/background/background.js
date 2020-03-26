chrome.runtime.onInstalled.addListener(details => {
    if(details.reason === chrome.runtime.OnInstalledReason.INSTALL){
        chrome.tabs.create({url: "/src/shortcuts.png"});
    }
});
