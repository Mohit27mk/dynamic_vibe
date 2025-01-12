import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';
import { Lightbulb } from 'lucide-react';

const DecorInventory = () => {
  const decorativeLightingData = [
    { name: "24” Disco Ball", image: "https://placehold.co/100x100/png" },
    { name: "LED String Lights", image: "https://placehold.co/100x100/png" },
    { name: "Uplighting", image: "https://placehold.co/100x100/png" },
    { name: "Fairy Lights", image: "https://placehold.co/100x100/png" },
    { name: "LED Candles", image: "https://placehold.co/100x100/png" },
    { name: "Chandeliers", image: "https://placehold.co/100x100/png" },
    { name: "Spotlights", image: "https://placehold.co/100x100/png" },
    { name: "Color Wash Lights", image: "https://placehold.co/100x100/png" },
    { name: "LED Dance Floor", image: "https://placehold.co/100x100/png" },
    { name: "Gobo Projector", image: "https://placehold.co/100x100/png" },
    { name: "Table Lamps", image: "https://placehold.co/100x100/png" },
    { name: "Lanterns", image: "https://placehold.co/100x100/png" },
  ];

  const backdropsData = [
    { name: "Hedge Wall", image: "https://placehold.co/100x100/png" },
    { name: "White Flower Wall", image: "https://placehold.co/100x100/png" },
    { name: "Champagne Wall", image: "https://placehold.co/100x100/png" },
    { name: "Black Flower Wall", image: "https://placehold.co/100x100/png" },
  ];

  const cardBoxesData = [
    { name: "Glass Card Box", image: "https://placehold.co/100x100/png" },
    { name: "White Card Box", image: "https://placehold.co/100x100/png" },
    { name: "Rustic Card Box", image: "https://placehold.co/100x100/png" },
    { name: "Gold Card Box", image: "https://placehold.co/100x100/png" },
  ];

  const chargersData = [
    { name: "Gold Charger", image: "https://placehold.co/100x100/png" },
    { name: "Wood Grain Charger", image: "https://placehold.co/100x100/png" },
    { name: "Silver Charger", image: "https://placehold.co/100x100/png" },
    { name: "Black Charger", image: "https://placehold.co/100x100/png" },
  ];

  const decorElements = [
    { name: 'Aqua Green – Mint', color: '#A0D3E8' },
    { name: 'Black', color: '#000000' },
    { name: 'Blush', color: '#F4C2C2' },
    { name: 'Champagne', color: '#F7E7CE' },
    { name: 'Coffee', color: '#6F4C3E' },
    { name: 'Fuchsia', color: '#FF00FF' },
    { name: 'Gold', color: '#FFD700' },
    { name: 'Kelly Green', color: '#4CBB17' },
    { name: 'Lavender', color: '#E6E6FA' },
    { name: 'Lemon', color: '#FFF700' },
    { name: 'Light Blue', color: '#ADD8E6' },
    { name: 'Orange', color: '#FFA500' },
    { name: 'Pink', color: '#FFC0CB' },
    { name: 'Purple', color: '#800080' },
    { name: 'Red', color: '#FF0000' },
    { name: 'Royal Blue', color: '#4169E1' },
    { name: 'Silver', color: '#C0C0C0' },
    { name: 'Sunflower', color: '#FFDA03' },
    { name: 'Turquoise', color: '#40E0D0' },
    { name: 'White', color: '#FFFFFF' },
    { name : 'Wine', color: '#722F37' },
  ];

  return (
    <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h1 className="text-4xl font-bold text-center text-white">Décor Inventory</h1>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-lg mb-12">
          <p className="text-lg text-amber-400 text-center leading-relaxed max-w-3xl mx-auto">
            We offer various décor elements to enhance your event design and appearance without the hassle of pre- and post-event storage! Our event specialists are available to meet with you to select the perfect pieces to create a magical event space.
          </p>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Lightbulb size={24} />
            <h2 className="text-2xl font-semibold">Decorative Lighting</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {decorativeLightingData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-center text-amber-500 mb-4">Backdrops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {backdropsData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-center text-amber-500 mb-4">Card Boxes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardBoxesData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-center text-amber-500 mb-4">Chargers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {chargersData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-center text-amber-500 mb-4">Décor Elements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {decorElements.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <div className="mb-2 w-24 h-24 rounded-lg" style={{ backgroundColor: item.color }}></div>
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DecorInventory;
