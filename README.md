# Spotify Add Muter
This is a simple extension with no required permissions that mutes advertisements on the Spotify web app.

It is very simple, actually: only 10 lines of code. [^1]

The extension only mutes the page when ads appear, instead of skipping them. This is fine for me personally, as I like a little bit of time in between songs when working anyway.

It's also important to note that this extension will only work on the Spotify web app. It will not work on the mobile or desktop apps.

## Motivations for creation
I enjoy listening to classical music on Spotify while working.
The problem is that the Spotify ads are **so loud** compared to the music I'm listening to.
They are so loud in fact, that I think that I will lose my hearing if I continue to listen to Spotify with ads at full volume.

I respect the fact that Spotify needs ads in order to make money and keep the platform going, so my original plan was to make an extension that merely lowers the volume of the ads, without completely muting them.
Unfortunately, [this does not appear to be currently possible](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/oZnvfCFdYSk) within the constraints of Chrome Manifest V3. This is because [chrome.tabCapture is unavailable inside of extension service workers](https://bugs.chromium.org/p/chromium/issues/detail?id=1214847).
Because of this fact, the only alternative was to make the extension completely mute the page.
If it does become possible in the future to lower the volume of ads without completey muting them, I may make an update to this extension.


[^1]: I'm only counting statements as lines. Normally I would also include whitespace in the line count, but 10 lines sounds significantly more impressive than 15 lines. I'm also not including the manifest.json file in this count. However you want to describe this extension's size, it's very simple.
