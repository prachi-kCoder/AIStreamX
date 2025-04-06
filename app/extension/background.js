// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("📡 Received tracking event:", message); 
//     if (message.type === "PAGE_TRACK" || message.type === "CLICK_TRACK") {
//       fetch("https://your-nextjs-app.com/api/track", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user_id: "67c2e8e1cdb7f9af62a559d4",
//           type: message.type,
//           data: message
//         })
//       }).then(response => response.json())
//       .then(data => console.log("✅ Tracking Data Sent Successfully:", data))
//       .catch(error => console.error("❌ Error Sending Tracking Data:", error));
//     }
//   });
  

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("📡 Received tracking event:", message); // ✅ Debugging

  fetch("http://localhost:3000/api/track", { // ✅ Replace with your deployed API URL in production
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: "67c2e8e1cdb7f9af62a559d4", // ✅ Replace with dynamic user ID
      type: message.type,
      data: message
    })
  })
  .then(response => response.json())
  .then(data => console.log("✅ Tracking Data Sent Successfully:", data))
  .catch(error => console.error("❌ Error Sending Tracking Data:", error));
});
