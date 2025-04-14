// models/activity.js
import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: String,
  data: Object,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Activity || mongoose.model("Activity", activitySchema);
