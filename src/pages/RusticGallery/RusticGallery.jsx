import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';
import { Camera } from 'lucide-react';

const RusticGallery = () => {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", alt: "Rustic wedding setup" },
    { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", alt: "Farm table arrangement" },
    { url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80", alt: "Tent lighting" },
    { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Wooden decor" },
    { url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80", alt: "Rustic table setting" },
    { url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", alt: "Wedding venue" },
    { url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80", alt: "Tent interior" },
    { url: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80", alt: "Chandelier detail" },
    { url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80", alt: "Evening setup" },
    { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Table decoration" },
    { url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80", alt: "Wine barrel bar" },
    { url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", alt: "Bistro lighting" },
    { url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80", alt: "Farm table setup" },
    { url: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80", alt: "Evening ambiance" },
    { url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80", alt: "Rustic details" },
    { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Full venue setup" },
  ];

  return (
    <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Camera size={32} className="text-amber-500" />
          <h1 className="text-4xl font-bold text-center text-white">Rustic Gallery</h1>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-12">
          <p className="text-lg text-amber-400 text-center leading-relaxed max-w-3xl mx-auto">
            There are endless takes on the rustic theme, and the beauty of this trend is that you can make it as laid back 
            and relaxed or as upscale as you wish! Our rustic tents encompass a mixture of our wooden farm tables, styled 
            wooden chairs, and wine barrel bars. In addition, we also have rustic tent chandeliers and bistro lighting to 
            complete the vibe!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RusticGallery;
