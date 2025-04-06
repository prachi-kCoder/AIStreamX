export async function trackUserActivity(type, data) {
    try {
      const response = await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, data })
      });
      
      const result = await response.json();
      console.log("Activity tracked:", result);
    } catch (error) {
      console.error("Error tracking activity:", error);
    }
  }
  