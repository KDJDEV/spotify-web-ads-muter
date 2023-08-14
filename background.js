chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    const tabId = sender.tab.id;
    await chrome.tabs.update(tabId, { muted: request.muted });
});