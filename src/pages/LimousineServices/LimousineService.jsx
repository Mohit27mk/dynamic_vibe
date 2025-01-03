import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/LimousineServiceData/LimoData';
import { useNavigate } from 'react-router-dom';
import Car from '@mui/icons-material/DirectionsCar';
import './limousine.css'
import Reviews from '../../components/HomePage/Reviews/Reviews';

const LimousineService = () => {
  const [isFixed, setIsFixed] = useState(false);

  // Refs for sections
  const logoRef = useRef(null);
  const aboutUsRef = useRef(null);
  const reviewsRef = useRef(null);
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
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { serviceType } = useParams();
  const normalizedServiceType = serviceType ? serviceType.charAt(0).toUpperCase() + serviceType.slice(1) : '';  // Capitalize first letter

  const serviceData = data[serviceType] ? data[serviceType][0] : null;

  if (!serviceData) {
    return <div>Service not found.</div>;
  }

  return (
    <div>
      <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>

        <section className=" flex flex-col items-center ">
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
            <span onClick={() => navigate('/carRentals/')}>Home</span>
            <div className='dropdown'>
              <span>Limousine Services</span>
              <div className="dropdown-content">
                <a onClick={() => navigate('/limousine/Airport')}>Airport Limousine Service</a>
                <a onClick={() => navigate('/limousine/Wedding')}>Wedding Limousine Service</a>
                <a onClick={() => navigate('/limousine/Prom')}>Prom Limousine Service</a>
                <a onClick={() => navigate('/limousine/Winery')}>Winery Tours</a>
                <a onClick={() => navigate('/limousine/Nights')}>Nights Out on the Town</a>
                <a onClick={() => navigate('/limousine/Bachelor')}>Bachelor and Bachelorette Parties</a>
                <a onClick={() => navigate('/limousine/Corporate')}>Corporate</a>
              </div>
            </div>
            <span onClick={() => scrollToSection(reviewsRef)}>Reviews</span>
            <div className='dropdown'>
              <span>About Us</span>
              <div className='dropdown-content'>
                <a onClick={() => navigate('/faq')}>FAQ</a>
              </div>
            </div>
            <div className='dropdown'>
              <span>Contact Us</span>
              <div className='dropdown-content'>
                <a onClick={() => navigate('/contact')}>Request a Call back</a>
              </div>
            </div>
          </div>

          <div className='Heading text-white text-center block mt-8'>

            <div className="Heading text-3xl font-semibold md:text-4xl mb-2">
              {serviceData.title}
            </div>
            <div className='text-lg md:text-xl'>
              <span>Founded in {serviceData.foundedYear + " | "}</span>
              <span>{serviceData.licensed ? "Licensed Chauffeurs | " : ""}</span>
              <span>{serviceData.consultations ? "Free Consultations and Quotes" : ""}</span>
            </div>
          </div>
          <div className='Heading text-white text-center block m-8'>

            <div className="Heading text-3xl font-semibold md:text-4xl mb-2">
              {serviceData.phoneNumber}
            </div>
            <div className='text-lg md:text-xl'>
              <p>Services Available 24/7</p>
            </div>
          </div>

          {/* Content-Body */}
          <div className='contentBody w-full flex flex-row p-6 items-center '>
            <div className="graphicSec inline-block bg-orange-300 p-4 m-4 w-1/4 h-1/4 text-white flex flex-col justify-center items-center text-center font-lobster">
              <Car sx={{ fontSize: '100px' }} />
              <div className="renderedTitle text-2xl">{serviceData.cardText}</div>
              <div>Call Us Today</div>
              <div className='renderedPhone text-2xl'>{serviceData.phoneNumber}</div>
            </div>
            <div className="textSec paragraphs-grid inline-block w-3/4">

              {serviceData.paragraphs.map((paragraph, index) => (
                <div key={index} className="paragraph-box">
                  {paragraph}
                </div>
              ))}

            </div>
          </div>
        </section>

        <div ref={reviewsRef}>
          <Reviews />
        </div>
      </div>
    </div>
  );
}


export default LimousineService;
