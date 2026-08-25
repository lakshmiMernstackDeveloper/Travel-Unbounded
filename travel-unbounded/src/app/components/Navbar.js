import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            {/* Using the image from the public folder */}
            <img 
              src="/travel-logo.png" 
              alt="Travel Unbounded Logo" 
              className="h-12 md:h-14 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-orange-600 transition">Home</Link>
            <Link href="/about" className="hover:text-orange-600 transition">About</Link>
            <Link href="/contact" className="hover:text-orange-600 transition">Contact</Link>

                      <Link 
            href="/contact" 
            className="bg-slate-600 text-white px-6 py-2.5 rounded-full border border-gray-300 shadow-md shadow-black/20 hover:bg-slate-700 transition-all active:scale-95"
          >
            Plan your trip
          </Link>
                    </div>

          {/* Simple Mobile Link */}
          <div className="md:hidden">
            <Link href="/contact" className="text-orange-600 font-bold">Enquire</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}