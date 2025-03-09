import { connectToDB } from "../../../../../lib/dbConfig";
import User from "../../../../../models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        console.log("Signup Attempt:", { name, email });

        await connectToDB();

        const existingUser = await User.findOne({ email });
        console.log("exitingUser : ", existingUser );
        
        if (existingUser) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        console.log("New User: ", newUser );
        console.log("Email: ", email , "Pass = "+ password);
        
        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json({ error: "Signup failed" }, { status: 500 });
    }
}
