// The open() method of the Window interface loads a specified resource into
// a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.

// open()
// open(url)
// open(url, target)
// open(url, target, windowFeatures)

let openedWindow;

function openWindow() {
    openedWindow = window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
}

function closeOpenedWindow() {
    openedWindow.close();
}

// This time, the new browsing context has the same origin
// const sameOriginContext = window.open("https://www.youtube.com/");
// console.log(sameOriginContext.origin);