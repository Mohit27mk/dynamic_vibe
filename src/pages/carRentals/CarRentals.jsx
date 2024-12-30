import React, { useRef, useState, useEffect } from 'react';
import './carRentals.css'; 
import { useNavigate } from 'react-router-dom';
import AboutUs from '../../components/CarRentalsPage/AboutUs/AboutUs';
import Services from '../../components/CarRentalsPage/Services/Services';
import Fleets from '../../components/CarRentalsPage/Fleets/Fleets';
import Reviews from '../../components/HomePage/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';

const CarRentals = () => {
  const [isFixed, setIsFixed] = useState(false);
  const logoRef = useRef(null);

  // Refs for sections
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const fleetsRef = useRef(null);
  const reviewsRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-custom-gradient-2 w-screen min-h-screen overflow-hidden'>

      <section className="pt-6 mb-16 overflow-x-hidden flex flex-col items-center">
        {/* Logo Section */}
        <div
          ref={logoRef}
          className="w-full h-1/5 text-white flex flex-col justify-center items-center gap-2 mb-16"
        >
          <div className="logo text-6xl font-lobster">Logo</div>
          <div className="tagline text-lg font-light">Space for tagline</div>
        </div>

        {/* Navbar */}
        <div
          className={`Navbar w-full bg-black/50 text-white flex flex-row flex-wrap justify-center gap-12 items-center p-4 shadow-lg ${isFixed ? 'fixed-navbar' : ''}`}
        >
          <span onClick={() => scrollToSection(logoRef)}>Home</span>
          <span onClick={() => scrollToSection(fleetsRef)}>Our Fleet</span>
          <div className='dropdown'>
            <span>Limousine Services</span>
            <div className='dropdown-content'>
              <a onClick={() => navigate("/carRentals/")}>Airport Limousine Service</a>
              <a onClick={() => navigate("#")}>Wedding Limousine Service</a>
              <a onClick={() => navigate("#")}>Prom Limousine Service</a>
              <a onClick={() => navigate("#")}>Winery Tours</a>
              <a onClick={() => navigate("#")}>Nights Out on the Town</a>
              <a onClick={() => navigate("#")}>Bachelor and Bachelorette Parties</a>
              <a onClick={() => navigate("#")}>Corporate</a>
            </div>
          </div>
          <span onClick={() => scrollToSection(reviewsRef)}>Reviews</span>
          <span onClick={() => scrollToSection(aboutUsRef)}>About Us</span>
        </div>

        <div className="Heading text-4xl md:text-6xl text-white font-semibold text-center block m-8">
          <p>Arrive in <span className='text-gradient'>Style,</span> </p>
          <p>Make Memories That Last.</p>
        </div>
        <div className="w-1/2 SubHeading text-sm text-white text-center block m-6">
          <p>Arrive in style and make your special moments unforgettable with our premium wedding and party car rentals. Experience luxury, comfort, and elegance for every occasion.</p>
        </div>
      </section>

      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={fleetsRef}>
        <Fleets />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>

      <Footer
        scrollToSection={scrollToSection}
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        fleetsRef={fleetsRef}
        reviewsRef={reviewsRef}
        homeIntroRef={logoRef}
      />
    </div>
  );
};

export default CarRentals;
