import React from 'react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import { Hammer } from 'lucide-react'; // You can use any icon that fits the theme

const CustomFabrication = () => {
  const showcaseImages = [
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
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Hammer size={32} className="text-amber-500" />
            <h1 className="text-4xl font-bold text-center text-white">Custom Fabrication</h1>
          </div>

          <div className="mb-16 bg-gray-900/50 rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-semibold text-amber-500 mb-4">Elevate Your Event</h2>
              <p className="text-white leading-relaxed mb-4">
                At Long Island Tent & Party Rentals, we’re committed to elevating your party experience to new heights. We are excited to introduce our custom fabrication services, designed to enhance the design and execution of your event.
              </p>
              <h3 className="text-lg font-semibold text-amber-500 mt-4 mb-2">What We Offer:</h3>
              <ul className="text-white list-disc list-inside mb-4">
                <li><strong>Vinyl Lettering:</strong> Perfect for creating personalized seating charts that add a unique touch to your event.</li>
                <li><strong>Custom Bars:</strong> Tailored bar designs that fit your theme and style, ensuring your guests enjoy their drinks in a beautifully crafted space.</li>
                <li><strong>DJ Front Boards:</strong> Custom-made boards that not only serve a functional purpose but also enhance the overall aesthetic of your event.</li>
              </ul>
              <p className="text-white leading-relaxed mb-4">
                We believe in working closely with you to bring your vision to life. Our team will collaborate with you to create unique pieces that reflect your stylistic preferences and event theme.
              </p>
              <h3 className="text-lg font-semibold text-amber-500 mt-4 mb-2">Showcase:</h3>
              <p className="text-white leading-relaxed mb-4">
                Take a look at the stunning pieces we’ve created so far! Our portfolio showcases a variety of custom designs that have delighted our clients and their guests.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {showcaseImages.map((image, index) => (
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
  );
}

export default CustomFabrication;
