import React from 'react';
import { Tent } from 'lucide-react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';

const ClearTopTents = () => {
  const images = [
    "https://litentrentals.com/wp-content/uploads/2023/02/20x50-w-Window-Sidewallsjpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/pinkjpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/20x30-Clear-Sides-Custom-Decor-5jpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/20x20-Pastel-Birthday-White-Chiavari-2jpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/The-Lakehouse-1-Social-Media-Sizejpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/40X100-Premium-Chappaqua-3jpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/pic-5jpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/20x40-Pole-Covers-Blue-Lightsjpg_resized-400x284.jpg",
    "https://litentrentals.com/wp-content/uploads/2023/02/40x100-w-Sidewallsjpg_resized-400x284.jpg"
  ];
  return (
    <>
      <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
      <div>
       <Navbar />
      </div>
      <div className="min-h-screen bg-custom-gradient-2 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tent className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">Clear Top Tents</h1>
          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
          Our clear top tents have become one of our showstoppers! When you don’t want to exclude the beauty of an event site, a clear top tent is the perfect solution to bring it all in.
          Clear top tents are designed to let nature’s backdrop be part of the event while still providing overhead protection. Evening and night events are especially magical when adding lighting to complement the night sky. These tents can be installed on any surface, and there are no center poles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image}
                  alt={`White Frame Tent ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      </div>
      <div>
        <Footer/>
      </div>
      </div>
    </>
  )
}

export default ClearTopTents
