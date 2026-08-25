"use client";
import { useState } from 'react';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    contactNumber: '',
    email: '',
    dateOfTravel: '',
    destinationOfInterest: '',
    numberOfPeople: 2,
    numberOfChildren: 0,
    hotelCategory: 'Deluxe',
    anythingElse: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) setSuccess(true);
      else alert("Submission failed. Please check your connection.");
    } catch (err) {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center max-w-2xl mx-auto border border-gray-100">
        <div className="text-5xl mb-4">✨</div>
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">Enquiry Received!</h2>
        <p className="text-gray-500">Our travel expert will reach out to you shortly.</p>
        <button onClick={() => setSuccess(false)} className="mt-6 text-[#A65E1A] font-semibold underline">Send another enquiry</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-[#FCFBF7] p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-8 text-sm">
        
        {/* FIELDSET 1: Personal Information */}
        <fieldset className="border border-gray-200 p-6 rounded-2xl bg-white/50">
          <legend className="px-3 text-[#A65E1A] font-bold uppercase tracking-widest text-xs">
            Personal Details
          </legend>
          
          <div className="space-y-4 mt-2">
            <div>
              <label className="block text-gray-600 mb-1.5 font-medium ml-1">Full name</label>
              <input 
                type="text" required placeholder="Ananya Sharma"
                className="w-full bg-white border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-50"
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1.5 font-medium ml-1">Email address</label>
                <input 
                  type="email" required placeholder="you@example.com"
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-50"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1.5 font-medium ml-1">Contact number</label>
                <div className="flex">
                   <select 
                    className="bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl p-3 outline-none text-xs"
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                   >
                     <option value="+91">🇮🇳 +91</option>
                     <option value="+254">🇰🇪 +254</option>
                     <option value="+1">🇺🇸 +1</option>
                   </select>
                   <input 
                    type="tel" required placeholder="9876543210"
                    className="w-full bg-white border border-gray-200 border-l-0 p-3 rounded-r-xl outline-none focus:ring-2 focus:ring-orange-50"
                    onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        {/* FIELDSET 2: Trip Information */}
        <fieldset className="border border-gray-200 p-6 rounded-2xl bg-white/50">
          <legend className="px-3 text-[#A65E1A] font-bold uppercase tracking-widest text-xs">
            Trip Preferences
          </legend>

          <div className="space-y-4 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1.5 font-medium ml-1">Date of travel</label>
                <input 
                  type="date" required min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl outline-none text-gray-400"
                  onChange={(e) => setFormData({...formData, dateOfTravel: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1.5 font-medium ml-1">Destination of interest</label>
                <input 
                  type="text" placeholder="Kenya, Ladakh, etc."
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl outline-none"
                  onChange={(e) => setFormData({...formData, destinationOfInterest: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-gray-500 mb-1.5 text-[10px] uppercase font-bold ml-1">Adults</label>
                <input 
                  type="number" defaultValue="2" min="1"
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl outline-none text-center"
                  onChange={(e) => setFormData({...formData, numberOfPeople: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1.5 text-[10px] uppercase font-bold ml-1">Children</label>
                <input 
                  type="number" defaultValue="0" min="0"
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl outline-none text-center"
                  onChange={(e) => setFormData({...formData, numberOfChildren: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1.5 text-[10px] uppercase font-bold ml-1">Category</label>
                <select 
                  className="w-full bg-white border border-gray-200 p-3 rounded-xl outline-none"
                  onChange={(e) => setFormData({...formData, hotelCategory: e.target.value})}
                >
                  <option value="Deluxe">Deluxe</option>
                  <option value="Standard">Standard</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>

        {/* FIELDSET 3: Additional Notes */}
        <fieldset className="border border-gray-200 p-6 rounded-2xl bg-white/50">
          <legend className="px-3 text-[#A65E1A] font-bold uppercase tracking-widest text-xs">
            Additional Notes
          </legend>
          <div className="mt-2">
            <textarea 
              rows="3" placeholder="Any special requests or preferences?"
              className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none resize-none"
              onChange={(e) => setFormData({...formData, anythingElse: e.target.value})}
            ></textarea>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button 
          disabled={loading}
          className="w-full bg-[#A65E1A] hover:bg-[#8B4D14] text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-lg active:scale-[0.98] disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}