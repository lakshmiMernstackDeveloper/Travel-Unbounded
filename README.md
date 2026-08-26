Travel Unbounded - Full Stack Developer Assignment

This project is a premium, high-performance travel company website built with Next.js 15. It features a modern "Soft UI" design, a server-side validated booking system, a voice-enabled AI travel planner, and high-speed caching using Redis.

🚀 Live Demo

Production Link: [Insert your Render/Vercel URL here]

Backend API: [Insert your Render Backend URL here]

🛠️ Technical Stack

Frontend: Next.js 15 (App Router), Tailwind CSS v4.
Backend: Next.js API Routes (Node.js).
Database: MongoDB Atlas (Mongoose ODM).
AI Engine: Groq Cloud (Llama 3.1-8b-instant).
Caching Layer: Upstash Redis (Fast-refresh).
Voice Engine: Web Speech API (Native browser STT/TTS).
Icons & UI: Lucide React, Framer Motion (for animations).




<img width="4154" height="5960" alt="travel home" src="https://github.com/user-attachments/assets/3662b3be-8a16-41fd-9926-8da95474448d" />



✨ Features

Phase 1: Core Functionality

Premium Home Page: Features India and International destinations using a reusable component architecture.

About Page: Follows brand storytelling guidelines with detailed office information.

Booking Enquiry Form:

Full client-side and server-side validation.

Captures: Name, Email, Country Code, Phone, Date (Future only), and Preferences.

Stores data in a TravelUnbounded collection in MongoDB.

Phase 2: Advanced AI & UI

1. How to implement it "The Right Way"

In your src/app/api/chat/route.js, the most important part is the System Message. This tells the AI how to behave before the user even types a word.

The Code (Backend):

code

JavaScript

// src/app/api/chat/route.js


const systemPrompt = `

You are the Lead Travel Consultant for "Travel Unbounded", a premium experiential travel agency. 

Your goal is to help users plan their dream journey. 

RULES:

1. If the user asks for a trip, provide a high-end 3-day itinerary.

2. Structure the output clearly: 

   - Start with a professional greeting.

   - Use '### Day 1', '### Day 2', etc., for headers.

   - Include 'Morning', 'Afternoon', and 'Evening' suggestions for each day.

   - End with an 'Expert Tip' related to the destination.

4. Use a calm, luxurious, and welcoming tone.

5. If a user asks something unrelated to travel, politely redirect them to travel planning.
`;

const completion = await groq.chat.completions.create({

  model: "llama-3.1-8b-instant",
  
  messages: [
  
    { role: "system", content: systemPrompt }, // IDENTITY
    
    { role: "user", content: message }         // USER QUESTION
  ],
});

2. Which type of Output should it give?

The AI should output Markdown. Markdown is great because your frontend can easily turn it into beautiful text with bold headings, bullet points, and clean spacing.

Example of a "Good" AI Output:

Travel Expert: "Hello! I would be delighted to help you plan your 3-day escape to Kerala. Here is a curated experiential itinerary:"

Day 1: The Tranquil Backwaters

Morning: Arrive at Alleppey and board your private luxury houseboat. Enjoy traditional Malabar breakfast.

Afternoon: Cruise through the Vembanad Lake. Watch the local life along the banks.

Evening: A quiet candle-lit dinner on the deck under the stars.

Day 2: Lush Hill Stations

Morning: Travel to Munnar. Visit the Eravikulam National Park.

... (and so on)

Expert Tip: Carry a light jacket even in summer, as the hills of Munnar can get chilly at night.

3. How to display this in React

Since the AI gives you Markdown text (with ### and *), you want the Chat Widget to show it properly.

Pro Tip: Use the whitespace-pre-wrap Tailwind class. This ensures that the AI’s line breaks and spaces actually show up on the screen.

In src/components/ChatWidget.js:

code

JavaScript

<div className="bg-white border p-4 rounded-2xl rounded-bl-none text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">

  {m.content}

</div>

4. Summary: Why this is "Right"

Feature	Wrong Way	Right Way (Your Project)

Response	"You should go to Kenya. It is nice."	"Welcome! As a Travel Unbounded expert, here is your 3-day Kenya Safari..."

Formatting	One big messy paragraph.	Structured days with headings and bullet points.

Persistence	Forgotten after refresh.	Saved to MongoDB so the admin can read it later.

Efficiency	Calls AI for every hello.	Uses Redis Cache to answer common questions instantly.

⚙️ Installation & Setup

Follow these steps to run the project locally:

1. Clone the repository

code

Bash

git clone https://github.com/lakshmiMernstackDeveloper/Travel-Unbounded.git


cd Travel-Unbounded/travel-unbounded

2. Install Dependencies

code

Bash

npm install

3. Configure Environment Variables

Create a .env.local file in the root of the travel-unbounded folder:

code

Env

# MongoDB Connection

MONGODB_URI=your_mongodb_atlas_connection_string


# Groq AI API Key (Get at console.groq.com)

GROQ_API_KEY=gsk_your_key

# Upstash Redis (Get at upstash.com)

UPSTASH_REDIS_REST_URL=your_upstash_url

UPSTASH_REDIS_REST_TOKEN=your_upstash_token

4. Run Development Server

code

Bash

npm run dev

Open http://localhost:3000 to view the site.

📂 Project Structure


src/app/api: Serverless backend functions.

src/components: Highly reusable UI components (ChatWidget, BookingForm, etc).

src/models: Mongoose schemas for Enquiries and Chat History.

src/lib: Database and Cache connection utilities.

src/data: Static destination data objects.

public: Images and branding assets.

🧪 Deployment

This project is optimized for deployment on Render or Vercel.

Note on CORS: If deployed as separate frontend/backend services, the API includes OPTIONS handlers and Access-Control headers to support cross-origin requests.
