import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';
import { Camera } from 'lucide-react';

const DecorGallery = () => {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80", alt: "Modern lounge setup" },
    { url: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80", alt: "Luxury seating area" },
    { url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80", alt: "Contemporary furniture" },
    { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", alt: "Event lounge" },
    { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80", alt: "Elegant seating" },
    { url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80", alt: "Modern couches" },
    { url: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800&q=80", alt: "Luxury lounge" },
    { url: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80", alt: "Statement pieces" },
    { url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80", alt: "LED furniture" },
    { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", alt: "Bar setup" },
    { url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80", alt: "Cocktail area" },
    { url: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80", alt: "VIP section" },
    { url: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80", alt: "Lounge design" },
    { url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80", alt: "Modern setup" },
    { url: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80", alt: "Contemporary design" },
    { url: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800&q=80", alt: "Event space" },
  ];

  return (
    <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Camera size={32} className="text-amber-500" />
          <h1 className="text-4xl font-bold text-center text-white">Décor Gallery</h1>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-12">
          <p className="text-lg text-amber-400 text-center leading-relaxed max-w-3xl mx-auto">
            Explore our stunning collection of décor elements that can transform any event into a memorable experience. 
            From elegant table settings to beautiful floral arrangements, our gallery showcases the versatility and beauty 
            of our décor offerings.
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

export default DecorGallery;
