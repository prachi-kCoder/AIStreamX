// document.getElementById("toggleTracking").addEventListener("click", () => {
//     chrome.storage.local.get(["trackingEnabled"], (data) => {
//       let newState = !data.trackingEnabled;
//       chrome.storage.local.set({ trackingEnabled: newState });
//       alert(`Tracking ${newState ? "Enabled" : "Disabled"}`);
//     });
//   });
  

  document.getElementById("toggleTracking").addEventListener("click", () => {
    chrome.storage.local.get(["trackingEnabled"], (data) => {
      const newState = !data.trackingEnabled;
      chrome.storage.local.set({ trackingEnabled: newState });
  
      chrome.runtime.sendMessage({
        type: "TOGGLE_TRACKING",
        enabled: newState
      });
  
      alert(`Tracking ${newState ? "Enabled ✅" : "Disabled ❌"}`);
    });
  });
  