
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, password } = data;

    // Do your registration logic here
    console.log("Sign-up data:", name, email, password);

    // Respond
    return NextResponse.json({ success: true, message: "User registered" });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

