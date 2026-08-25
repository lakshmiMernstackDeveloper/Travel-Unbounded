import BookingForm from "../components/BookingForm";

// This is the main Contact/Enquiry Page
export const metadata = {
  title: "Plan Your Trip | Travel Unbounded",
  description: "Fill out our enquiry form to get a personally-vetted travel itinerary.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="pt-20 pb-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Plan Your Journey
        </h1>
        <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
          Tell us about your dream trip. Every journey we craft is personally 
          vetted and built around your preferences.
        </p>
      </div>

      {/* Form Container */}
      <div className="pb-24 px-4 flex justify-center">
        {/* We wrap the form in a width-controlled container */}
        <div className="w-full max-w-3xl">
          <BookingForm />
        </div>
      </div>

      {/* Contact Info Footer (Optional but professional) */}
      <div className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">+91 80 4123 4567</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">expert@travelunbounded.com</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">Indiranagar, Bengaluru</p>
          </div>
        </div>
      </div>
    </div>
  );
}