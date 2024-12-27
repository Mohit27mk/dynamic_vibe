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
    <section id='Services' className="ServicesContainer p-6 w-full max-w-full flex flex-col lg:gap-6">
      <div className="Heading w-full text-center text-white">
        <p className="text-gradient font-lora lg:text-6xl text-4xl mb-5">Services</p>
      </div>

      {/* CarContainer */}
      <div className="CarContainer flex flex-col-reverse md:flex-row w-full items-center justify-between lg:gap-8 gap-4">
        <div
          ref={carImageRef}
          className={`ImageContainer md:w-1/2 w-full transition-all duration-500 ${
            isCarImageVisible ? 'filter-none' : 'blur-sm brightness-50'
          }`}
        >
          <img src={Carride} alt="Car ride" className="Image w-full rounded-lg" />
        </div>
        <div className="TextContainer glass rounded-3xl p-6 w-full text-left text-white">
          <h2 className="lg:text-3xl text-xl font-bold mb-4 md:mb-0">Car Ride Service</h2>
          <p>
            Enjoy a safe and comfortable ride with our top-rated car service. Our professional drivers ensure a smooth and reliable journey to your destination.
          </p>
        </div>
      </div>

      {/* PartyContainer */}
      <div className="PartyContainer flex flex-col md:flex-row w-full items-center justify-between lg:gap-8 gap-4 py-6">
        <div className="TextContainer glass rounded-3xl p-6 w-full text-left text-white">
          <h2 className="lg:text-3xl text-xl font-bold mb-4 md:mb-0">Party Service</h2>
          <p>
            Make your celebrations unforgettable with our premium party services. From transportation to event planning, we’ve got you covered for a memorable experience.
          </p>
        </div>
        <div
          ref={partyImageRef}
          className={`ImageContainer md:w-1/2 w-full mr-2 transition-all duration-500 ${
            isPartyImageVisible ? 'filter-none' : 'blur-sm brightness-50'
          }`}
        >
          <img src={Party} alt="Party Service" className="Image w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Services;
