import React from 'react';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';
import { Sofa, Armchair, Lightbulb } from 'lucide-react';

const LoungeInventory = () => {
  const loungeFurnitureData = [
    { name: "Button Tufted 3 Piece Couch", image: "https://placehold.co/100x100/png" },
    { name: "Button Tufted 3 Piece Curved Couch", image: "https://placehold.co/100x100/png" },
    { name: "Titanium Frame Couch", image: "https://placehold.co/100x100/png" },
    { name: "Button Tufted 2 Piece Couch", image: "https://placehold.co/100x100/png" },
    { name: "Curved Leather Bench", image: "https://placehold.co/100x100/png" },
    { name: "Titanium Ottoman", image: "https://placehold.co/100x100/png" },
    { name: "High Back 3 Piece Couch", image: "https://placehold.co/100x100/png" },
    { name: "High Back Love Seat", image: "https://placehold.co/100x100/png" },
    { name: "Leather Bench", image: "https://placehold.co/100x100/png" },
    { name: "4 Piece Pie Ottoman", image: "https://placehold.co/100x100/png" },
    { name: "Round Ottoman", image: "https://placehold.co/100x100/png" },
    { name: "Square Ottoman", image: "https://placehold.co/100x100/png" },
    { name: "Black Leather Titanium 3 Piece Couch", image: "https://placehold.co/100x100/png" },
    { name: "Black Titanium Ottoman", image: "https://placehold.co/100x100/png" },
    { name: "Black Armless Chair", image: "https://placehold.co/100x100/png" },
    { name: "7 PIECE WICKER COUCHES", image: "https://placehold.co/100x100/png" },
  ];

  const tableData = [
    { name: "Black Spandex Cocktail Table & Acrylic table", image: "https://placehold.co/100x100/png" },
    { name: "Black Coffee Table", image: "https://placehold.co/100x100/png" },
    { name: "LED Cube", image: "https://placehold.co/100x100/png" },
    { name: "LED Acrylic Cocktail Table", image: "https://placehold.co/100x100/png" },
    { name: "LED Coffee Table", image: "https://placehold.co/100x100/png" },
    { name: "LED Spandex Cocktail table", image: "https://placehold.co/100x100/png" },
  ];

  const seatingData = [
    { name: "Ghost Stool", image: "https://placehold.co/100x100/png" },
    { name: "Black Stool", image: "https://placehold.co/100x100/png" },
    { name: "Gold Stool", image: "https://placehold.co/100x100/png" },
    { name: "Ghost Chiavari Stool", image: "https://placehold.co/100x100/png" },
    { name: "White Chiavari Stool", image: "https://placehold.co/100x100/png" },
    { name: "White Bar Stool", image: "https://placehold.co/100x100/png" },
  ];

  const statementPiecesData = [
    { name: "Grey Victorian Loveseat", image: "https://placehold.co/100x100/png" },
    { name: "Black Velvet Couch", image: "https://placehold.co/100x100/png" },
    { name: "Oatmeal Couch", image: "https://placehold.co/100x100/png" },
    { name: "Black Velvet Curved Couch", image: "https://placehold.co/100x100/png" },
    { name: "Black Armless Loveseat", image: "https://placehold.co/100x100/png" },
    { name: "Turquoise Curved Loveseat", image: "https://placehold.co/100x100/png" },
    { name: "White High Bench", image: "https://placehold.co/100x100/png" },
    { name: "White Daybed", image: "https://placehold.co/100x100/png" },
    { name: "White Metal Bench", image: "https://placehold.co/100x100/png" },
    { name: "White Club Couch", image: "https://placehold.co/100x100/png" },
    { name: "White Club Chair", image: "https://placehold.co/100x100/png" },
    { name: "White Futon", image: "https://placehold.co/100x100/png" },
    { name: "Silver Futon", image: "https://placehold.co/100x100/png" },
    { name: "Ghost Chair", image: "https://placehold.co/100x100/png" },
    { name: "Silver Round Ottoman", image: "https://placehold.co/100x100/png" },
  ];

  return (
    <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Lounge Inventory</h1>
        
        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Sofa size={24} />
            <h2 className="text-2xl font-semibold">Lounge Furniture</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loungeFurnitureData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Lightbulb size={24} />
            <h2 className="text-2xl font-semibold">LED & Tables</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tableData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Armchair size={24} />
            <h2 className="text-2xl font-semibold">Bar Seating</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {seatingData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Sofa size={24} />
            <h2 className="text-2xl font-semibold">Statement Pieces</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {statementPiecesData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-24 h-24 object-cover rounded-lg" />
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

export default LoungeInventory;
