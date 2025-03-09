import { connectToDB } from "../../../../../lib/dbConfig";
import User from "../../../../../models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { signIn } from "next-auth/react";

import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "../../[...nextauth]/options";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    const { email, password } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate a JWT token
    // const token = await getToken({
    //   req,
    //   secret: process.env.NEXTAUTH_SECRET,
    //   token: { id: user._id, email: user.email },
    // });

    // const response = NextResponse.json({ message: "Login successful", success: true });
    const result = await signIn("credentials", {
      redirect: false, // Important: Prevent auto-redirects
      email,
      password,
    });

    if (!result || result.error) {
      return NextResponse.json({ error: "Login failed" }, { status: 401 });
    }

    const response = NextResponse.json({ message: "Login successful", success: true });
    
    
    let cookiesStore  = await cookies();
    cookiesStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 24 * 60 * 60, // 1 day
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
