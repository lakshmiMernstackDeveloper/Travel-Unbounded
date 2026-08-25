import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Chat from '@/models/Chat';
import OpenAI from 'openai';

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    // Call AI directly (ignoring Redis for a moment)
   const completion = await groq.chat.completions.create({
  model: "openai/gpt-oss-20b",  // fast, cheap 8B-class replacement
  messages: [{ role: "user", content: message }],
});
    const aiResponse = completion.choices[0].message.content;

    // Save to Mongo
    await connectDB();
    await Chat.create({ userQuestion: message, aiResponse: aiResponse });

    return NextResponse.json({ text: aiResponse });

  } catch (error) {
    // THIS LOG WILL SHOW IN YOUR TERMINAL
    console.error("DEBUG ERROR:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}