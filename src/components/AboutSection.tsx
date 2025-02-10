import React from 'react';
import { Utensils, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            1985'ten beri geleneksel Türk mutfağının en seçkin lezzetlerini modern bir yorumla sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-w-16">
            <img
              src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg"
              alt="Restaurant ambiance"
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Hikayemiz</h3>
            <p className="text-gray-600 leading-relaxed">
              Restoranımız, üç kuşaktır devam eden mutfak tutkusunun bir yansıması olarak doğdu. 
              Anadolu'nun zengin mutfak kültürünü, geleneksel tarifleri koruyarak ve modern sunumlarla 
              harmanlayarak misafirlerimize sunuyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Her bir tarifimiz, yılların deneyimi ve özenle seçilmiş en taze malzemelerle hazırlanıyor. 
              Mutfağımızda kullandığımız tüm malzemeler, yerel üreticilerden günlük olarak temin ediliyor.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-emerald-100 rounded-full">
              <Utensils className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Misyonumuz</h4>
            <p className="text-gray-600">
              Türk mutfağının zengin mirasını koruyarak, en kaliteli malzemelerle hazırlanan 
              lezzetleri misafirlerimize sunmak.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-emerald-100 rounded-full">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Değerlerimiz</h4>
            <p className="text-gray-600">
              Kalite, hijyen ve müşteri memnuniyeti önceliklerimiz arasında ilk sırada yer alır.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-emerald-100 rounded-full">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Ekibimiz</h4>
            <p className="text-gray-600">
              Deneyimli şeflerimiz ve güler yüzlü personelimizle size en iyi hizmeti sunmaya hazırız.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Özel Etkinlikler</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Özel günleriniz için restoranımızda organizasyon düzenleyebilir, 
            catering hizmetimizden yararlanabilirsiniz. Detaylı bilgi için bizimle 
            iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;