document.getElementById("toggleTracking").addEventListener("click", () => {
    chrome.storage.local.get(["trackingEnabled"], (data) => {
      let newState = !data.trackingEnabled;
      chrome.storage.local.set({ trackingEnabled: newState });
      alert(`Tracking ${newState ? "Enabled" : "Disabled"}`);
    });
  });
  