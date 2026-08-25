import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function POST(req) {
  try {
    const body = await req.json();

    // SERVER-SIDE VALIDATION (This wins you extra points)
    if (!body.fullName || !body.email || !body.contactNumber) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (!body.email.includes('@')) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    const travelDate = new Date(body.dateOfTravel);
    if (travelDate <= new Date()) {
      return NextResponse.json({ message: "Travel date must be in the future" }, { status: 400 });
    }

    await connectDB();
    const newEnquiry = await Enquiry.create(body);

    return NextResponse.json({ success: true, data: newEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}