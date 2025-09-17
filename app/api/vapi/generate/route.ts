import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { db } from "@/firebase/admin";
import { NextRequest, NextResponse } from "next/server";
import { getRandomInterviewCover } from "@/lib/utils";


export async function POST(request: NextRequest) {
  const { type, role, level, techstack, amount, userId } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("models/gemini-1.5-flash"), 
      prompt: `prepare questions for a job interview.
The job role is ${role}.
The job experience level is ${level}.
The tech stack used in the job is: ${techstack}.
The focus between behavioural and technical questions should lean towards: ${type}.
The amount of questions required is: ${amount}.
Please return only the questions, without any additional text.
The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
Return the questions formatted like this:
["Question 1", "Question 2", "Question 3"]

Thank you! <3`,
    });

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(",").map((t: string) => t.trim()),
      questions: JSON.parse(questions),
      userId,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return NextResponse.json({ success: true, data: interview }, { status: 200 });
  } catch (error: any) {
    console.error("Interview generation error:", error);
    return NextResponse.json(
      { success: false, error: error.message ?? "Internal Server Error" },
      { status: 500 }
    );
  }
}
