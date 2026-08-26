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

✨ Features

Phase 1: Core Functionality

Premium Home Page: Features India and International destinations using a reusable component architecture.

About Page: Follows brand storytelling guidelines with detailed office information.

Booking Enquiry Form:

Full client-side and server-side validation.

Captures: Name, Email, Country Code, Phone, Date (Future only), and Preferences.

Stores data in a TravelUnbounded collection in MongoDB.

Phase 2: Advanced AI & UI

AI Itinerary Planner: A floating chatbot that generates custom 3-day travel plans.

Redis Caching: Repeat questions are served in milliseconds via Redis to save AI credits and reduce latency.

Voice Assistance:

Voice-to-Text: Users can speak their travel questions.

Text-to-Speech: The AI reads the itinerary aloud (can be muted).

Offline Detection: Custom global monitor detects internet loss and shows a professional recovery screen.

Admin Dashboard: Secure logs at /admin to view leads and AI conversation history.

Visual Polish: Realistic animated airplane with vapor trails and floating clouds on the contact page.

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
