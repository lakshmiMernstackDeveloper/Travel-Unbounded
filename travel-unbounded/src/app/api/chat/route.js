import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import connectDB from '@/lib/mongodb';
import Chat from '@/models/Chat';
import OpenAI from 'openai';

export const dynamic = 'force-dynamic';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle Preflight request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    const groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const cacheKey = `chat:${message?.toLowerCase().trim()}`;
    const cachedAnswer = await redis.get(cacheKey);

    if (cachedAnswer) {
      return NextResponse.json({ text: cachedAnswer, fromCache: true }, { headers: corsHeaders });
    }

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: message }],
    });

    const aiResponse = completion.choices[0].message.content;

    await redis.set(cacheKey, aiResponse, { ex: 86400 });
    await connectDB();
    await Chat.create({ userQuestion: message, aiResponse: aiResponse });

    return NextResponse.json({ text: aiResponse }, { headers: corsHeaders });

  } catch (error) {
    console.error("AI Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}