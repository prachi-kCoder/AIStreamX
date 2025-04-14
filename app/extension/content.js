// let startTime = Date.now();

// window.addEventListener("beforeunload", () => {
//   const timeSpent = Date.now() - startTime;
//   console.log("🔍 Page Tracked:", { url: window.location.href, duration: timeSpent });
//   chrome.runtime.sendMessage({
//     type: "PAGE_TRACK",
//     url: window.location.href,
//     duration: timeSpent
//   });
// });

// document.addEventListener("click", (event) => {
//     console.log("🔍 Click Tracked:", { element: event.target.tagName, url: window.location.href });

//     chrome.runtime.sendMessage({
//         type: "CLICK_TRACK",
//         element: event.target.tagName,
//         url: window.location.href,
//         timestamp: Date.now()
//   });
// });
