import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

// This is required to handle the "Preflight" request sent by browsers
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*', // Change '*' to your specific frontend URL later for better security
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    // SERVER-SIDE VALIDATION
    if (!body.fullName || !body.email || !body.contactNumber) {
      return NextResponse.json({ message: "Missing required fields" }, { 
        status: 400,
        headers: { 'Access-Control-Allow-Origin': '*' } // Add header to errors too
      });
    }

    if (!body.email.includes('@')) {
      return NextResponse.json({ message: "Invalid email format" }, { 
        status: 400,
        headers: { 'Access-Control-Allow-Origin': '*' } 
      });
    }

    const travelDate = new Date(body.dateOfTravel);
    if (travelDate <= new Date()) {
      return NextResponse.json({ message: "Travel date must be in the future" }, { 
        status: 400,
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }

    await connectDB();
    const newEnquiry = await Enquiry.create(body);

    return NextResponse.json(
      { success: true, data: newEnquiry }, 
      { 
        status: 201,
        headers: {
          'Access-Control-Allow-Origin': '*', // This allows the frontend to read the response
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}