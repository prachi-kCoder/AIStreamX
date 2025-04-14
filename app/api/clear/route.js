// pages/api/clear.js
// import { connectToDB } from ""; // adjust this to your DB utils
import { connectToDB } from "../../../lib/dbConfig";
import Activity from "../../../models/activity";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options"; // if using auth

export async function POST() {
  try {
    await connectToDB();

    // Optional: Get current user
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    // Only delete current user's activities
    const result = await Activity.deleteMany(userId ? { userId } : {});

    return NextResponse.json({
      message: userId ? "User activities cleared" : "All activities cleared",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
