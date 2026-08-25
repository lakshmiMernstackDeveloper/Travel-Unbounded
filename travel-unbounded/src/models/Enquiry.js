import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  countryCode: String,
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  dateOfTravel: { type: Date, required: true },
  destinationOfInterest: String,
  numberOfPeople: { type: Number, default: 1 },
  numberOfChildren: { type: Number, default: 0 },
  hotelCategory: { type: String, default: 'Standard' },
  anythingElse: String,
  createdAt: { type: Date, default: Date.now }
}, { collection: 'TravelUnbounded' });

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);