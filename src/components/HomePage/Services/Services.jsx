import React, { useEffect, useRef, useState } from 'react';
import './services.css';
import Carride from '../../../assets/images/carride.jpg';
import Party from '../../../assets/images/party.jpg';

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
    <section id="Services" className="services-container">
      <div className="heading w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Our Exclusive Services
        </h1>
      </div>

      <div className="service-container md:flex-row flex-col-reverse md:mb-0 mb-6">
        <div
          ref={carImageRef}
          className={`image-container transition-all duration-500 p-1 ${isCarImageVisible ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
        >
          <img src={Carride} alt="Car Ride Service" className="image" />
        </div>
        <div className="text-container h-min">
          <h2 className="text-2xl font-bold mb-4">Car Ride Service</h2>
          <p className="text-lg leading-relaxed">
            Enjoy a safe and comfortable ride with our top-rated car service. Our professional drivers ensure a smooth and reliable journey to your destination.
          </p>
        </div>
      </div>

      <div className="service-container md:flex-row flex-col">
        <div className="text-container">
          <h2 className="text-2xl font-bold mb-4">Party Service</h2>
          <p className="text-lg leading-relaxed">
            Make your celebrations unforgettable with our premium party services. From transportation to event planning, we’ve got you covered for a memorable experience.
          </p>
        </div>
        <div
          ref={partyImageRef}
          className={`image-container transition-all duration-500 p-1 ${isPartyImageVisible ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
        >
          <img src={Party} alt="Party Service" className="image" />
        </div>
      </div>
    </section>
  );
};

export default Services;
