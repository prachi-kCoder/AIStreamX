let activeTabs = {};
let loggedDurations = {};
let trackingEnabled = true; // dynamic control

const IGNORED_DOMAINS = ["localhost:3000", "nexusai.com", "your-deployment.com"];
const IGNORED_PATHS = ["/api/auth", "/_next", "/favicon.ico"];

function isIgnoredUrl(url) {
  try {
    const parsed = new URL(url);
    return IGNORED_DOMAINS.includes(parsed.host) || IGNORED_PATHS.some(path => parsed.pathname.startsWith(path));
  } catch (e) {
    return true;
  }
}

// Load tracking state on startup
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(["trackingEnabled"], (data) => {
    trackingEnabled = data.trackingEnabled !== false;
  });
});

// Listen for popup toggle
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "TOGGLE_TRACKING") {
    trackingEnabled = request.enabled;
    sendResponse({ success: true });
  }
});

function trackTabVisit(tabId) {
  if (!trackingEnabled) return;

  const activity = activeTabs[tabId];
  if (!activity || isIgnoredUrl(activity.url)) return;

  const now = Date.now();
  const durationMins = (now - activity.startTime) / 60000;
  const roundedHour = Math.floor(durationMins / 60);

  if (!loggedDurations[tabId]) loggedDurations[tabId] = [];

  if (!loggedDurations[tabId].includes(roundedHour) && durationMins >= 15) {
    loggedDurations[tabId].push(roundedHour);

    const domain = new URL(activity.url).hostname;

    const data = {
      type: "long_visit_hour",
      data: {
        tool: activity.url,
        domain,
        title: activity.title,
        duration: durationMins * 60,
        startTime: activity.startTime,
        endTime: now,
        hourMark: roundedHour
      },
      userId: "user-id-dynamic"
    };

    fetch("http://localhost:3000/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resData => console.log(`✅ Hour ${roundedHour} logged for`, domain))
    .catch(err => console.error("❌ Tracking failed:", err));
  }
}

setInterval(() => {
  if (trackingEnabled) {
    Object.keys(activeTabs).forEach(tabId => trackTabVisit(tabId));
  }
}, 60 * 1000);

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  if (!trackingEnabled) return;
  const tab = await chrome.tabs.get(tabId);
  if (!tab.url.startsWith("http")) return;

  activeTabs[tabId] = {
    url: tab.url,
    title: tab.title || '',
    startTime: Date.now()
  };
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!trackingEnabled) return;
  if (changeInfo.status === "complete" && tab.url.startsWith("http")) {
    activeTabs[tabId] = {
      url: tab.url,
      title: tab.title || '',
      startTime: Date.now()
    };
  }
});

chrome.tabs.onRemoved.addListener(tabId => {
  delete activeTabs[tabId];
  delete loggedDurations[tabId];
});
