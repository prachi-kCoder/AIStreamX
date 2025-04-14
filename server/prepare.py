import pandas as pd
import json

# Load CSV
ratings_df = pd.read_csv("model//user_tool_ratings.csv")

# Group useful info per tool
tool_info = ratings_df.groupby("tool_used").agg({
    "category": "first",
    "rating": "mean",
    "efficiency_gain": "mean",
    "user_feedback": lambda x: list(x)
}).reset_index()

# Convert to dict
tool_data = {
    row["tool_used"]: {
        "category": row["category"],
        "avg_rating": round(row["rating"], 1),
        "avg_efficiency": int(row["efficiency_gain"]),
        "feedback_sample": row["user_feedback"][0] if len(row["user_feedback"]) > 0 else "No feedback available."
    }
    for _, row in tool_info.iterrows()
}

# Save to JSON
with open("model/tool_data.json", "w") as f:
    json.dump(tool_data, f, indent=2)

print("Tool data saved to tool_data.json")
