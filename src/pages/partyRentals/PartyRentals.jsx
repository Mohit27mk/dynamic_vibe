import React, { useRef } from 'react';
import './partyRentals.css';
import AboutUs from '../../components/CarRentalsPage/AboutUs/AboutUs';
import Services from '../../components/CarRentalsPage/Services/Services';
import Reviews from '../../components/HomePage/Reviews/Reviews';
import Footer from '../../components/CarRentalsPage/Footer/Footer';
import TentPackages from '../../components/PartyRentalsPage/TentPackages';
import Navbar from '../../components/PartyRentalsPage/Navbar';

const PartyRentals = () => {
    const logoRef = useRef(null);
    const aboutUsRef = useRef(null);
    const servicesRef = useRef(null);
    const reviewsRef = useRef(null);
    const quoteRequestRef = useRef(null);
    const contactUsRef = useRef(null);
    
    const scrollToSection = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
      <div>
        <Navbar />
      </div>
      <div className='text-center'>
      <div className="Heading text-4xl md:text-6xl text-white font-semibold text-center block m-8">
        <p>Arrive in <span className='text-gradient'>Style,</span> </p>
        <p>Make Memories That Last.</p>
      </div>
      <div className="SubHeading text-sm text-white text-center block m-6">
        <p style={{textAlign: "center"}}>Arrive in style and make your special moments unforgettable with our premium wedding and party car rentals. Experience luxury, comfort, and elegance for every occasion.</p>
      </div>
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div>
        <TentPackages />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        homeIntroRef={logoRef}
        contactUsRef={contactUsRef}
        quoteRequestRef={quoteRequestRef}
      />
    </div>
  )
}

export default PartyRentals;
