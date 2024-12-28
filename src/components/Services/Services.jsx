import React, { useEffect, useRef, useState } from 'react';
import './services.css';
import Carride from '../../assets/images/carride.jpg';
import Party from '../../assets/images/party.jpg';

const Services = () => {
  const carImageRef = useRef(null);
  const partyImageRef = useRef(null);
  const [isCarImageVisible, setIsCarImageVisible] = useState(false);
  const [isPartyImageVisible, setIsPartyImageVisible] = useState(false);

  useEffect(() => {
    const carObserver = new IntersectionObserver(
      ([entry]) => {
        setIsCarImageVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const partyObserver = new IntersectionObserver(
      ([entry]) => {
        setIsPartyImageVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (carImageRef.current) carObserver.observe(carImageRef.current);
    if (partyImageRef.current) partyObserver.observe(partyImageRef.current);

    return () => {
      if (carImageRef.current) carObserver.unobserve(carImageRef.current);
      if (partyImageRef.current) partyObserver.unobserve(partyImageRef.current);
    };
  }, []);

  return (
    <section id="Services" className="services-container p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="heading w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Our Exclusive Services
        </h1>
      </div>

     
      <div className="service-container flex flex-col-reverse md:flex-row items-center justify-center gap-6 mb-12">
        <div
          ref={carImageRef}
          className={`image-container w-full md:w-1/3 transition-all duration-500 ${isCarImageVisible ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
        >
          <img src={Carride} alt="Car Ride Service" className="image w-full rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500" />
        </div>
        <div className="text-container bg-white bg-opacity-40 rounded-3xl p-6 w-full md:w-2/4 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Car Ride Service</h2>
          <p className="text-lg leading-relaxed">
            Enjoy a safe and comfortable ride with our top-rated car service. Our professional drivers ensure a smooth and reliable journey to your destination.
          </p>
        </div>
      </div>

      
      <div className="service-container flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-container bg-white bg-opacity-40 rounded-3xl p-6 w-full md:w-2/4 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Party Service</h2>
          <p className="text-lg leading-relaxed">
            Make your celebrations unforgettable with our premium party services. From transportation to event planning, we’ve got you covered for a memorable experience.
          </p>
        </div>
        <div
          ref={partyImageRef}
          className={`image-container w-full md:w-1/3 transition-all duration-500 ${isPartyImageVisible ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
        >
          <img src={Party} alt="Party Service" className="image w-full rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Services;
