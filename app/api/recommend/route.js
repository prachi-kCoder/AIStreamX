
export async function getRecommendations(userData) {
    const response = await fetch("http://localhost:8000/api/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch recommendations");
    }
  
    return await response.json(); // returns recommendations
  }
  