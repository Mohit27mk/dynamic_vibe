import React from 'react'
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import { Camera } from 'lucide-react';

const EventDesign = () => {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80", alt: "Elegant room setup" },
    { url: "https://images.unsplash.com/photo-1519337265801-281ec6cc8514?w=800&q=80", alt: "Beautiful floral arrangement" },
    { url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&q=80", alt: "Chic décor elements" },
    { url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80", alt: "Stylish event setup" },
    { url: "https://images.unsplash.com/photo-1519337265801-281ec6cc8514?w=800&q=80", alt: "Decorative lighting" },
    { url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&q=80", alt: "Modern décor" },
    { url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80", alt: "Sophisticated table design" },
    { url: "https://images.unsplash.com/photo-1519337265801-281ec6cc8514?w=800&q=80", alt: "Floral centerpiece" },
    { url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&q=80", alt: "Elegant event décor" },
    { url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80", alt: "Stylish decorations" },
    { url: "https://images.unsplash.com/photo-1519337265801-281ec6cc8514?w=800&q=80", alt: "Charming setup" },
    { url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&q=80", alt: "Artistic décor" },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h1 className="text-4xl font-bold text-center text-white">Event Design</h1>
        </div>

        <div className="mb-16 bg-gray-900/50 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-amber-500 mb-4">Full-Service Event Design</h2>
              <p className="text-white leading-relaxed">
              Whether you need complete event design and execution or your own ideas brought to fruition, we can create and customize a plan to transform your vision into a successful event. Your guests will be delighted to see, and experience, your dream event come true!
              </p>
              <p className="text-white leading-relaxed">
              Contact us for a showroom appointment to discuss your event’s design. Let us help you create a once in a lifetime moment!
              </p>
              <h3 className="text-lg font-semibold text-amber-500 mt-4 mb-2">We offer:</h3>
              <ul className="text-white list-disc list-inside mb-4">
                <li>Backdrops</li>
                <li>Florals</li>
                <li>Lighting</li>
                <li>Linens</li>
                <li>Tablescapes</li>
                <li>And More…</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80" 
                alt="Event Design Service" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <Camera size={32} className="text-amber-500" />
          <h1 className="text-4xl font-bold text-center text-white">Roomscaping</h1>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-12">
          <p className="text-lg text-amber-400 text-center leading-relaxed max-w-3xl mx-auto">
            Roomscaping is the art of transforming a space into a beautiful and inviting environment. Our team of designers will work with you to create a unique and memorable event that will leave a lasting impression on your guests.
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
    </>
  )
}

export default EventDesign
