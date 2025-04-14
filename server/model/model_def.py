# server/model/model_def.py
import torch
import torch.nn as nn
from transformers import BertModel

class BertWithFeatures(nn.Module):
    def __init__(self, bert_model_name, feature_size):
        super(BertWithFeatures, self).__init__()
        self.bert = BertModel.from_pretrained(bert_model_name)
        self.feature_layer = nn.Linear(feature_size, 32)
        self.fc = nn.Linear(self.bert.config.hidden_size + 32, 1)

    def forward(self, input_ids, attention_mask, features):
        bert_output = self.bert(
            input_ids=input_ids,
            attention_mask=attention_mask
        ).pooler_output
        feature_output = self.feature_layer(features)
        combined = torch.cat((bert_output, feature_output), dim=1)
        return self.fc(combined)
