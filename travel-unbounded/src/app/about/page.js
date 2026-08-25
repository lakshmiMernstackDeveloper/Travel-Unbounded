import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Travel Unbounded",
  description: "Learn about India's most trusted experiential travel experts.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen font-sans text-gray-800">
      
      {/* Header Section */}
      <section className="pt-24 pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#A65E1A] mb-4">
          Our Story
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl mx-auto">
          India's most trusted experiential travel experts
        </h1>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed">
          <p>
            Travel Unbounded was born from a simple belief — that the best journeys aren't sold 
            from a catalogue. They're built around the people taking them.
          </p>
          <p>
            Headquartered in Bangalore with offices in Kerala and Nairobi, we design trips 
            that blend comfort, culture, and raw nature. Every destination, resort, and activity 
            we recommend has been personally experienced by our team.
          </p>
          <p>
            From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset — 
            we go where real stories are written, and we bring you along.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
          Why travellers choose us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 01 */}
          <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[#A65E1A] font-serif italic text-lg mb-4 block">01</span>
            <h3 className="text-xl font-bold mb-3">Personally vetted experiences</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Every resort, guide and activity we recommend has been experienced first-hand by 
              someone on our team — no catalogue copy, no guesswork.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[#A65E1A] font-serif italic text-lg mb-4 block">02</span>
            <h3 className="text-xl font-bold mb-3">Local guides who live the place</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Our naturalists and city guides are residents first. They know which gate opens early 
              and which viewpoint is empty at sunrise.
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[#A65E1A] font-serif italic text-lg mb-4 block">03</span>
            <h3 className="text-xl font-bold mb-3">Custom itineraries, never templates</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              We start with your pace, budget and curiosity, then build the route. Two travellers 
              going to Kenya rarely get the same plan.
            </p>
          </div>

          {/* Card 04 */}
          <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[#A65E1A] font-serif italic text-lg mb-4 block">04</span>
            <h3 className="text-xl font-bold mb-3">24x7 on-trip support</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              A real person on WhatsApp or phone through your entire journey, across every 
              time zone we operate in.
            </p>
          </div>

        </div>
      </section>

      {/* Office Locations (From Previous Requirements) */}
      <section className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-bold text-orange-800 mb-2">Bengaluru — HQ</h4>
              <p className="text-gray-500 text-sm">541, 7th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru – 560008</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-800 mb-2">Kochi — Kerala</h4>
              <p className="text-gray-500 text-sm">LR Towers, S Janatha Road, Palavivatton, Kochi – 682025</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-800 mb-2">Nairobi — Kenya</h4>
              <p className="text-gray-500 text-sm">Westpark Towers, Muthithi Road, Nairobi, P.O. Box 6950</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}