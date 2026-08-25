import mongoose from 'mongoose';

export default async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  // Safety check to prevent the "undefined" error during build
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable in .env.local');
  }

  if (mongoose.connection.readyState >= 1) return;

  try {
    return await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("Mongoose connection error:", error);
    throw error;
  }
}