import React from 'react'
import { Tent } from 'lucide-react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';

const TentLiner = () => {
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
          <h1 className="text-4xl font-bold text-white mb-6">Tent Liner</h1>
          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
          Our tent liner and pole covers will add a finishing touch of sophistication and elegance to any event. These décor elements are used as a stylish way to hide the tent’s framework and soften the atmosphere while providing a beautiful setting to impress your guests!
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

export default TentLiner