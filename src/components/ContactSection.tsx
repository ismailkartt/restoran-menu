import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Bizi Ziyaret Edin</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-w-16">
            <img
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
              alt="Restaurant contact"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Konum</h3>
              <p>Lezzet Sokağı No:123, Yemek Şehri</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Çalışma Saatleri</h3>
              <p>Pazartesi - Cuma: 11:00 - 23:00</p>
              <p>Cumartesi - Pazar: 10:00 - 23:00</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">İletişim</h3>
              <p>+90 234 567 8900</p>
              <p>iletisim@restoran.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;