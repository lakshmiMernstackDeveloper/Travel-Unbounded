import DestinationCard from "./components/DestinationCard";
import { destinations } from "../data/destinations";
import Link from "next/link";

export default function Home() {
  const india = destinations.filter(d => d.category === "india");
  const international = destinations.filter(d => d.category === "international");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 lg:px-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
          style={{ backgroundImage: "url('https://www.dekhokashmir.com/assets/images/illustrations/family/family-shikara-dal-lake.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-white max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm font-medium mb-4 text-gray-300">
            Bangalore • Kochi • Nairobi
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            India's most trusted <br />
            <span className="text-orange-400 italic">experiential</span> travel experts
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            The best journeys aren't sold from a catalogue. They're built around 
            the people taking them — from dawn in the Masai Mara to sunset over 
            Ha Long Bay.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-Egyptian-Teal-600 hover:bg-light-gray-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-white/20 active:scale-95 border border-black"
          >
            Plan your trip
          </Link>
        </div>

        {/* Bottom Feature Bar (The icons at the bottom of your screenshot) */}
        <div className="absolute bottom-10 left-6 lg:left-20 z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-sm">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-white/20">✔</span>
            <span>Personally vetted stays</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-white/20">📍</span>
            <span>Guides who live there</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-white/20">🧭</span>
            <span>Custom itineraries</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-white/20">🧡</span>
            <span>24x7 on-trip support</span>
          </div>
        </div>
      </section>

      {/* India Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900">India Destinations</h2>
            <div className="h-1 w-20 bg-orange-500 mt-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {india.map(d => <DestinationCard key={d.id} dest={d} />)}
        </div>
      </section>

      {/* International Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900">International Destinations</h2>
              <div className="h-1 w-20 bg-orange-500 mt-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {international.map(d => <DestinationCard key={d.id} dest={d} />)}
          </div>
        </div>
      </section>
    </div>
  );
}