# server/main.py
from fastapi import FastAPI
from pydantic import BaseModel
import torch
from transformers import BertTokenizer
from model.model_def import BertWithFeatures
from fastapi.middleware.cors import CORSMiddleware
import json
import sys
# Add the 'model' folder to sys.path so Python can locate the 'tools' module
sys.path.append("./model")

# Import the label_map from the tools folder inside model/
from tools import label_map    # This should be a list of tool names in order used during training

# Load preprocessed tool data
with open("model/tool_data.json") as f:
    tool_data = json.load(f)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load model & tokenizer
device = "cuda" if torch.cuda.is_available() else "cpu"
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

model = BertWithFeatures("bert-base-uncased", feature_size=3).to(device)
model.load_state_dict(torch.load("model//bert_tool_recommendation.pth", map_location=device))
model.eval()

# Input schema
class InputData(BaseModel):
    tool_used: str
    category: str
    user_feedback: str
    time_spent: float
    actions_performed: float
    efficiency_gain: float

@app.post("/api/recommend")
def recommend(data: InputData):
    # Create text input for BERT
    input_text = f"Tool: {data.tool_used} Category: {data.category} Feedback: {data.user_feedback}"
    encoded = tokenizer(input_text, return_tensors="pt", padding="max_length", truncation=True, max_length=128)

    # Numerical features
    numerical_features = torch.tensor([[data.time_spent, data.actions_performed, data.efficiency_gain]], dtype=torch.float32)

    # Move tensors to device
    input_ids = encoded["input_ids"].to(device)
    attention_mask = encoded["attention_mask"].to(device)
    features = numerical_features.to(device)

    # Predict
    with torch.no_grad():
        prediction = model(input_ids, attention_mask, features)
        predicted_index = int(round(prediction.item()))

    # Map index to tool name
    if 0 <= predicted_index < len(label_map):
        suggested_tool = label_map[predicted_index]
        tool_meta = tool_data.get(suggested_tool, {})
        return {
            "suggested_app": suggested_tool,
            "category": tool_meta.get("category", "Unknown"),
            "average_rating": tool_meta.get("avg_rating", "N/A"),
            "efficiency_gain": tool_meta.get("avg_efficiency", "N/A"),
            "why_recommended": tool_meta.get("feedback_sample", "No feedback available.")
        }
    else:
        return {"suggested_app": "Focus Keeper",
    "category": "Time Management",
    "average_rating": "4.5",
    "efficiency_gain": "High",
    "why_recommended": "Always here to help assist you for better time management and efficiency boost!"}

# from fastapi import FastAPI
# from pydantic import BaseModel
# import torch
# from transformers import BertTokenizer
# from model.model_def import BertWithFeatures
# import json
# from tools import label_map

# # Load preprocessed tool data
# with open("model/tool_data.json") as f:
#     tool_data = json.load(f)


# app = FastAPI()

# # Load model & tokenizer
# device = "cuda" if torch.cuda.is_available() else "cpu"
# tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# model = BertWithFeatures("bert-base-uncased", feature_size=3).to(device)
# model.load_state_dict(torch.load("model//bert_tool_recommendation.pth", map_location=device))
# model.eval()

# class InputData(BaseModel):
#     tool_used: str
#     category: str
#     user_feedback: str
#     time_spent: float
#     actions_performed: float
#     efficiency_gain: float


# @app.post("/api/recommend")
# def recommend(data: InputData):
#     input_text = f"Tool: {data.tool_used} Category: {data.category} Feedback: {data.user_feedback}"
#     encoded = tokenizer(input_text, return_tensors="pt", padding="max_length", truncation=True, max_length=128)

#     numerical_features = torch.tensor([[data.time_spent, data.actions_performed, data.efficiency_gain]], dtype=torch.float32)

#     input_ids = encoded["input_ids"].to(device)
#     attention_mask = encoded["attention_mask"].to(device)
#     features = numerical_features.to(device)

#     with torch.no_grad():
#         prediction = model(input_ids, attention_mask, features)
#         predicted_index = int(round(prediction.item()))
    
#     # Get tool name
#     if predicted_index < 0 or predicted_index >= len(label_map):
#         return {"error": "Invalid prediction from model"}

#     suggested_tool = label_map[predicted_index]
#     tool_meta = tool_data.get(suggested_tool, {})

#     return {
#         "suggested_app": suggested_tool,
#         "category": tool_meta.get("category", "Unknown"),
#         "average_rating": tool_meta.get("avg_rating", "N/A"),
#         "efficiency_gain": tool_meta.get("avg_efficiency", "N/A"),
#         "why_recommended": f"{tool_meta.get('feedback_sample', '')}"
#     }
# @app.post("/api/recommend")
# def recommend(data: InputData):
#     input_text = f"Tool: {data.tool_used} Category: {data.category} Feedback: {data.user_feedback}"
#     encoded = tokenizer(input_text, return_tensors="pt", padding="max_length", truncation=True, max_length=128)

#     numerical_features = torch.tensor([[data.time_spent, data.actions_performed, data.efficiency_gain]], dtype=torch.float32)

#     input_ids = encoded["input_ids"].to(device)
#     attention_mask = encoded["attention_mask"].to(device)
#     features = numerical_features.to(device)

#     with torch.no_grad():
#         prediction = model(input_ids, attention_mask, features)
    
#     return {"suggested_app": round(prediction.item(), 2)}

