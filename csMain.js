console.info(`%cSpotify Add Muter v${chrome.runtime.getManifest().version} has started!`, "color: orange");

const title = document.querySelector("title");

observer = new MutationObserver(() => {
    const titleText = title.innerText;
    const isAdvertisement = titleText.indexOf("Spotify – ") !== -1; // this string in full appears as "Spotify – Advertisement", but the final part can be in different languages, so we just look for the first part
    chrome.runtime.sendMessage({ muted: isAdvertisement });
});

observer.observe(title, { characterData: false, childList: true, attributes: false });