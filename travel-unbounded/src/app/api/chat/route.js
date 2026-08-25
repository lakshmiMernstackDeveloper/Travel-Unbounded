import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Chat from '@/models/Chat';
import OpenAI from 'openai';

// We do NOT initialize the client outside the function to avoid Build Errors
export async function POST(req) {
  try {
    // 1. Initialize inside the POST function
    const groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      // If you are using a specific service for "openai/gpt-oss-20b", 
      // ensure this baseURL is correct. For Groq standard models, we use:
      // baseURL: "https://api.groq.com/openai/v1", 
      baseURL: "https://api.groq.com/openai/v1",
    });

    const { message } = await req.json();
    
    // 2. Call AI with your requested model ID
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b", 
      messages: [
        { role: "system", content: "You are a professional travel assistant for Travel Unbounded." },
        { role: "user", content: message }
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    // 3. Connect to Database
    await connectDB();

    // 4. Store Conversation in MongoDB
    await Chat.create({ 
      userQuestion: message, 
      aiResponse: aiResponse 
    });

    return NextResponse.json({ text: aiResponse });

  } catch (error) {
    // Check terminal for this log if the chat window shows an error
    console.error("DEBUG ERROR:", error.message);
    
    return NextResponse.json(
      { error: "AI Processing Failed", details: error.message }, 
      { status: 500 }
    );
  }
}