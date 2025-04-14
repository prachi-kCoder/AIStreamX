import torch
from transformers import BertTokenizer
from model.bert_model import BertWithFeatures  # assuming this is where you defined your model

# Device setup
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load tokenizer and model
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertWithFeatures("bert-base-uncased", feature_size=3).to(device)
model.load_state_dict(torch.load("server/model/bert_tool_recommendation.pth", map_location=device))
model.eval()

def predict(tool, category, feedback, time_spent, actions, efficiency_gain):
    input_text = f"Tool: {tool} Category: {category} Feedback: {feedback}"
    encoded = tokenizer(input_text, return_tensors="pt", padding="max_length", truncation=True, max_length=128)
    numerical_features = torch.tensor([[time_spent, actions, efficiency_gain]], dtype=torch.float32)

    input_ids = encoded["input_ids"].to(device)
    attention_mask = encoded["attention_mask"].to(device)
    features = numerical_features.to(device)

    with torch.no_grad():
        output = model(input_ids, attention_mask, features)

    return round(output.item(), 2)
