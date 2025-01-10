import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const logoRef = useRef(null); // Refs for sections
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
    <>
      <section className=" flex flex-col items-center">
        {/* Logo Section */}
        <div
          ref={logoRef}
          className="w-full h-1/5 text-white flex flex-col justify-center items-center gap-2 mb-16 mt-10"
        >
          <img src={logo} alt="Logo" className="logo w-40 h-32" />
          {/* <div className="tagline text-lg font-light">Space for tagline</div> */}
        </div>

        {/* Navbar */}
        <div
          className={`Navbar w-full bg-black/50 text-white flex flex-row flex-wrap justify-center md:gap-12 gap-1 items-center shadow-lg ${isFixed ? 'fixed-navbar' : ''}`}
        >
          <span onClick={()=>navigate('/')}>Home</span>
          <span onClick={()=>navigate('/aboutus')}>About Us</span> 
          <div className='dropdown'>
            <span>Tent Styles</span>
            <div className='dropdown-content'>
              <a onClick={()=>navigate('/whiteframetents')}>White Frame Tents</a>
              <a onClick={()=>navigate('/cleartoptents')}>Clear Top Tents</a>
              <a onClick={()=>navigate('/tentliner')}>Tent Liner</a>
              <a onClick={()=>navigate('/skylight')}>Skylight</a>
              <a onClick={()=>navigate('/sailcloth')}>Sailcloth</a>
              <a onClick={()=>navigate('/swag')}>Swag</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Packages</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/tentpackages')}>Tent Packages</a>
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
          <span onClick={()=>navigate('/request')}>Quote Request</span> 
        </div>
      </section>
    </>
  )
}

export default Navbar
