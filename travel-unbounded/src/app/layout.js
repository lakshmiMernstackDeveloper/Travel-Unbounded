import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import OfflineStatus from "./components/OfflineStatus"; // This is okay

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body >
        <OfflineStatus /> {/* Global Monitor */}
        <Navbar />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}