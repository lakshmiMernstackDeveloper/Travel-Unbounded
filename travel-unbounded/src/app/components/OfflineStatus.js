"use client";
import { useState, useEffect } from 'react';

export default function OfflineStatus() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Initial check
    if (typeof window !== "undefined") {
      setIsOffline(!window.navigator.onLine);

      const handleOnline = () => setIsOffline(false);
      const handleOffline = () => setIsOffline(true);

      // Listen for connection changes
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
      <div className="max-w-md">
        {/* The requested Image */}
        <img 
        src="/offline.jpg"  
        alt="No Connection" 
        className="w-full h-auto rounded-3xl shadow-2xl mb-8 border border-gray-100"
        />
                
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Oops! Connection Lost
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          It looks like you've gone offline. Please check your internet 
          connection to continue planning your dream journey.
        </p>

        {/* Retry Button */}
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#A65E1A] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all active:scale-95 shadow-lg"
        >
          Retry Connection
        </button>
      </div>
      
      {/* Background decoration to match your theme */}
      <div className="absolute top-0 left-0 w-full h-2 bg-orange-600"></div>
    </div>
  );
}