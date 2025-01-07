import React, { useRef, useState, useEffect } from 'react';
import './partyRentals.css';
import { useNavigate } from 'react-router-dom';
import AboutUs from '../../components/CarRentalsPage/AboutUs/AboutUs';
import Services from '../../components/CarRentalsPage/Services/Services';
import Fleets from '../../components/CarRentalsPage/Fleets/Fleets';
import Reviews from '../../components/HomePage/Reviews/Reviews';
import Footer from '../../components/CarRentalsPage/Footer/Footer';
import ContactUs from '../../components/CarRentalsPage/ContactUs/ContactUs';

const PartyRentals = () => {
  const [isFixed, setIsFixed] = useState(false);
    
    // Refs for sections
    const logoRef = useRef(null);
    const aboutUsRef = useRef(null);
    const servicesRef = useRef(null);
    const fleetsRef = useRef(null);
    const reviewsRef = useRef(null);
    const quoteRequestRef = useRef(null);
    const contactUsRef = useRef(null);
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>

      <section className=" flex flex-col items-center">
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
          className={`Navbar w-full bg-black/50 text-white flex flex-row flex-wrap justify-center md:gap-12 gap-1 items-center shadow-lg ${isFixed ? 'fixed-navbar' : ''}`}
        >
          <span onClick={() => scrollToSection(logoRef)}>Home</span>
          <div className='dropdown'>
            <span>About Us</span>
            <div className='dropdown-content'>
              <a onClick={()=>navigate('/faq')}>Our Story</a>
              <a onClick={()=>navigate('/faq')}>Areas We Serve</a>
              <a onClick={()=>navigate('/faq')}>Terms And Conditions</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Tent Styles</span>
            <div className='dropdown-content'>
              <a onClick={()=>navigate('/faq')}>White Frame Tents</a>
              <a onClick={()=>navigate('/faq')}>Clear Top Tents</a>
              <a onClick={()=>navigate('/faq')}>Tent Liner</a>
              <a onClick={()=>navigate('/faq')}>Skylight</a>
              <a onClick={()=>navigate('/faq')}>Sailcloth</a>
              <a onClick={()=>navigate('/faq')}>Swag</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Packages</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine/Airport')}>Tent Packages</a>
              <a onClick={() => navigate('/limousine/Wedding')}>Tent & Liner Package</a>
              <a onClick={() => navigate('/limousine/Prom')}>Clear Top Packages</a>
              <a onClick={() => navigate('/limousine/Winery')}>Sailcloth Packages</a>
              <a onClick={() => navigate('/limousine/Nights')}>Rustic Packages</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>Lounge Packages</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Rustic</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine/Airport')}>Rustic Inventory</a>
              <a onClick={() => navigate('/limousine/Wedding')}>Rustic Packages</a>
              <a onClick={() => navigate('/limousine/Prom')}>Rustic Gallery</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Lounge</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine/Airport')}>Lounge Inventory</a>
              <a onClick={() => navigate('/limousine/Wedding')}>Lounge Packages</a>
              <a onClick={() => navigate('/limousine/Prom')}>Lounge Gallery</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Accessories</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine/Airport')}>Tables & Chairs</a>
              <a onClick={() => navigate('/limousine/Wedding')}>Linens</a>
              <a onClick={() => navigate('/limousine/Prom')}>Lighting</a>
              <a onClick={() => navigate('/limousine/Winery')}>Flooring</a>
              <a onClick={() => navigate('/limousine/Nights')}>Bars</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>Backdrops and Draping</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>AV & Staging</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>Heating And Cooling</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Décor</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine/Airport')}>Décor Inventory</a>
              <a onClick={() => navigate('/limousine/Wedding')}>Décor Packages</a>
              <a onClick={() => navigate('/limousine/Prom')}>Décor Gallery</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Design</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine/Airport')}>Event Design</a>
              <a onClick={() => navigate('/limousine/Wedding')}>Custom Fabrication</a>
              <a onClick={() => navigate('/limousine/Prom')}>Lighting</a>
              <a onClick={() => navigate('/limousine/Winery')}>Flooring</a>
              <a onClick={() => navigate('/limousine/Nights')}>Bars</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>Backdrops and Draping</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>AV & Staging</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>Heating And Cooling</a>
            </div>
          </div>
          <span onClick={() => scrollToSection(reviewsRef)}>Reviews</span>
          <span onClick={() => scrollToSection(quoteRequestRef)}>Quote Request</span> 
          {/* <div className='dropdown'>
            <span>Contact Us</span>
            <div className='dropdown-content'>
            <a onClick={()=>navigate('/contact')}>Request a Call back</a>
            </div>
          </div> */}
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
      <div ref={contactUsRef}>
        <ContactUs />
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
      />
    </div>
  )
}

export default PartyRentals;
