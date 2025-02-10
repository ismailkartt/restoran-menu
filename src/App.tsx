import React, { useState, useEffect } from 'react';
import { Menu, MapPin, Clock, Phone, Instagram, Facebook, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import QRCode from './components/QRCode';

function App() {
  const [showQR, setShowQR] = useState(true);

  useEffect(() => {
    // 5 saniye sonra QR kodunu gizle
    const timer = setTimeout(() => {
      setShowQR(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Restaurant interior" 
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Restoran</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light">
            Geleneksel Türk mutfağının seçkin lezzetleri, özenle hazırlanmış özel tarifler
          </p>
          <a 
            href="#menu" 
            className="group flex items-center gap-2 border border-white/30 backdrop-blur-sm px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Menüyü Keşfet
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </a>
        </div>
      </section>

      <AboutSection />
      <MenuSection />
      <ContactSection />
      {showQR && <QRCode />}

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Konum</h3>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                Lezzet Sokak No:123, İstanbul
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Çalışma Saatleri</h3>
              <p className="flex items-center gap-2">
                <Clock size={18} />
                Haftanın her günü: 11:00 - 23:00
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">İletişim</h3>
              <p className="flex items-center gap-2 mb-2">
                <Phone size={18} />
                +90 212 345 67 89
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Restoran. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App