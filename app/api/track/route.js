import { connectToDB } from "../../../lib/dbConfig";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import mongoose from "mongoose";
import Activity from "../../../models/activity"; 

export async function POST(req) {
  try {
    // ✅ Connect to MongoDB
    await connectToDB();

    // ✅ Get the logged-in user
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    // ✅ Parse request body
    const body = await req.json();
    if (!body.userId || typeof body.userId !== "string") {
      return res.status(400).json({ error: "Invalid userId" });
    }
    // ✅ Store activity data
    const activity = new Activity({
      userId: session.user.id, 
      type: body.type,
      data: body.data,
    });

    await activity.save();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error storing activity:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// ✅ Handle GET request: Fetch user activities
export async function GET(req) {
    try {
      await connectToDB();
      const { searchParams } = new URL(req.url);
      const userId = searchParams.get("userId");
  
      if (!userId) {
        return new Response(JSON.stringify({ error: "User ID is required" }), { status: 400 });
      }
  
      console.log("🔍 Fetching activities for user:", userId);
      const activities = await Activity.find({ userId }).sort({ timestamp: -1 });
  
      return new Response(JSON.stringify({ activities }), { status: 200 });
    } catch (error) {
      console.error("❌ Error fetching activities:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }