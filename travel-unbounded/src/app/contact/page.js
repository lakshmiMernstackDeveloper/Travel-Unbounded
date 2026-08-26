import BookingForm from "../components/BookingForm";

export const metadata = {
  title: "Plan Your Journey | Travel Unbounded",
  description: "Experience the best journeys with Travel Unbounded. Plan your trip with our experts.",
};

// Flat-icon style cloud — bold outline, light blue fill
function Cloud({ className }) {
  return (
    <svg viewBox="0 0 100 60" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 50
           C 12 50, 5 42, 8 33
           C 4 24, 14 15, 24 18
           C 27 8, 42 6, 48 16
           C 60 12, 72 20, 68 32
           C 78 33, 80 46, 68 50
           Z"
        fill="#DCEEFF"
        stroke="#111827"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Flat-icon style plane — bold outline, angled nose, swept wing, dot windows
function PlaneIcon({ className }) {
  return (
    <svg viewBox="0 0 220 120" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Speed dashes */}
      <rect x="0" y="88" width="24" height="8" rx="4" fill="#111827" />
      <rect x="30" y="88" width="14" height="8" rx="4" fill="#111827" />

      {/* Wing / forward-swept flap, attached under the body */}
      <path
        d="M90 68 L140 66 L120 96 L75 92 Z"
        fill="#EAF4FF"
        stroke="#111827"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Tail fin, wide base flush with fuselage top edge */}
      <path
        d="M35 58 L25 22 L62 50 Z"
        fill="#EAF4FF"
        stroke="#111827"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Fuselage — nose taper built into the same path */}
      <path
        d="M30 58 L150 48 L196 58 L150 70 L30 68 Z"
        fill="#EAF4FF"
        stroke="#111827"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Tail fin accent */}
      <path d="M35 58 L48 51 L40 62 Z" fill="#C7B9F5" />

      {/* Cockpit window */}
      <path
        d="M165 52 L188 58 L165 64 Z"
        fill="#7DD3FC"
        stroke="#111827"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Windows */}
      {[68, 88, 108, 128].map((cx) => (
        <circle key={cx} cx={cx} cy={58} r="4" fill="#111827" />
      ))}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">

      {/* --- FLIGHT STRIP: sits above the Header Section --- */}
      <div className="relative w-full h-20 md:h-24 overflow-hidden z-30">
        <div className="absolute top-2 left-0 animate-flight-real w-fit">
          <PlaneIcon className="w-40 md:w-56 h-auto drop-shadow-sm" />
        </div>
      </div>

      {/* --- BACKGROUND CLOUDS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Cloud className="absolute top-24 left-10 w-40 opacity-90" />
        <Cloud className="absolute top-16 right-16 w-48 opacity-90" />
      </div>

      {/* Header Section */}
      <div className="pt-4 pb-10 text-center px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
          Plan Your Journey
        </h1>
        <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed italic">
          "The best journeys aren't sold from a catalogue. They're built around the people taking them."
        </p>
      </div>

      {/* Form Container */}
      <div className="pb-24 px-4 flex justify-center relative z-20">
        <div className="w-full max-w-3xl">
          <BookingForm />
        </div>
      </div>

      {/* Contact Info Footer */}
      <div className="bg-[#FCFBF7] py-16 border-t border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center uppercase tracking-[0.2em] text-[10px] font-bold text-gray-400">
          <div>
            <h3 className="text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-500 text-sm font-normal normal-case tracking-normal">+91 80 4123 4567</p>
          </div>
          <div>
            <h3 className="text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm font-normal normal-case tracking-normal">expert@travelunbounded.com</p>
          </div>
          <div>
            <h3 className="text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-500 text-sm font-normal normal-case tracking-normal">Indiranagar, Bengaluru</p>
          </div>
        </div>
      </div>
    </div>
  );
}