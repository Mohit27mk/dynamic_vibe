import React from 'react';

const tentData = [
  {
    image: 'https://litentrentals.com/wp-content/uploads/2024/04/White-Frame__1-980x652-min.webp',
    title: 'Luxury Tent',
    description: 'A spacious tent with all the amenities for a comfortable stay.',
  },
  {
    image: 'https://litentrentals.com/wp-content/uploads/2024/04/Clear_top_style-980x652-min.webp',
    title: 'Family Tent',
    description: 'Perfect for families, this tent offers ample space and comfort.',
  },
  {
    image: 'https://litentrentals.com/wp-content/uploads/2024/04/Tent-Liner-Thumbnail-980x652-min.webp',
    title: 'Adventure Tent',
    description: 'Lightweight and easy to set up, ideal for your next adventure.',
  },
  {
    image: 'https://litentrentals.com/wp-content/uploads/2023/02/sky-light0-1.jpg',
    title: 'Glamping Tent',
    description: 'Experience nature without sacrificing luxury.',
  },
  {
    image: 'https://litentrentals.com/wp-content/uploads/2023/02/swag-1.jpg',
    title: 'Eco Tent',
    description: 'Sustainable materials and design for the eco-conscious camper.',
  },
  {
    image: 'https://litentrentals.com/wp-content/uploads/2023/03/Sailcloth-style.jpg',
    title: 'Beach Tent',
    description: 'Stay cool and protected from the sun at the beach.',
  },
];

const TentPackages = () => {
  return (
    <>
      <section id="Fleets" className="FleetContainer p-6 h-full w-11/12 m-auto my-6 bg-[#000d2a] rounded-xl relative">
        <h2 className="text-white seHeading text-gradient text-2xl md:text-3xl text-center mb-6">Tent Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {tentData.map((tent, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg text-white transform transition-transform duration-300 hover:scale-105">
              <img src={tent.image} alt={tent.title} className="w-full h-96 object-cover" />
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
                <h3 className="text-lg font-bold">{tent.title}</h3>
                <p className="text-gray-300">{tent.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TentPackages;
