export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          
          <p className="text-gray-400 text-sm leading-relaxed">
            India's Most Trusted Experiential Travel Experts. We design trips that blend comfort, culture, and nature.
          </p>
        </div>

        {/* Office 1 */}
        <div>
          <h4 className="font-bold mb-4 text-orange-200">Bengaluru (HQ)</h4>
          <p className="text-gray-400 text-sm">
            541, 7th Main Rd, HAL 2nd Stage<br />
            Indiranagar, Bengaluru – 560008<br />
            India
          </p>
        </div>

        {/* Office 2 */}
        <div>
          <h4 className="font-bold mb-4 text-orange-200">Kochi Office</h4>
          <p className="text-gray-400 text-sm">
            LR Towers, S Janatha Road<br />
            Palavivatton, Kochi – 682025<br />
            India
          </p>
        </div>

        {/* Office 3 */}
        <div>
          <h4 className="font-bold mb-4 text-orange-200">Nairobi Office</h4>
          <p className="text-gray-400 text-sm">
            Westpark Towers, Muthithi Road<br />
            Nairobi, P.O. Box 6950<br />
            Postal Code 00100, Kenya
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Travel Unbounded. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}