import React, { useRef } from 'react';
import './partyRentals.css';
// import AboutUs from '../../components/CarRentalsPage/AboutUs/AboutUs';
// import Services from '../../components/CarRentalsPage/Services/Services';
import Footer from '../../components/CarRentalsPage/Footer/Footer';
import TentPackages from '../../components/PartyRentalsPage/TentPackages';
import Navbar from '../../components/PartyRentalsPage/Navbar';
import TestimonialSwiper from '../../components/PartyRentalsPage/TestimonialSwiper';

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

  const asSeenOnLogos = [
    'https://litentrentals.com/wp-content/uploads/2023/02/news12_logo.png',
    'https://litentrentals.com/wp-content/uploads/2023/02/HGTV_logo.png',
    'https://litentrentals.com/wp-content/uploads/2023/02/TLC.png'
  ];

  const eventEssentials = [
    {
      title: 'Tables & Chairs',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Linens',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lighting',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Flooring',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Bars',
      image: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lounge Furniture',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Backdrops & Draping',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Rustic',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Décor',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
      <div>
        <Navbar />
      </div>
      <div className='text-center'>
      <div className="Heading text-4xl md:text-6xl text-white font-semibold text-center block m-8">
         <p><span className='text-gradient'>Long Island's,</span> Premier Tent & Event Rental Source</p>
      </div>
      <div className="SubHeading text-sm text-white text-center block m-6">
        <p style={{textAlign: "center"}}>
          Long Island's Premier Tent & Event Rental Source offers a wide range of elegant tent styles and essential event items, ensuring a memorable experience for any occasion. They cater to various events, providing high-quality rentals and exceptional service to meet clients' needs. The company specializes in providing comprehensive tent and event rental solutions, making it a go-to choice for clients in Long Island.
        </p>

      </div>
      </div>
      <div className="min-h-screen w-screen overflow-x-hidden bg-custom-gradient-2">

      {/* Tent Styles Section */}
      <div>
        <TentPackages />
      </div>

      {/* As Seen On Section */}
      <section className="py-12 bg-custom-gradient-2">
        <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">As seen on:</h2>
          <div className="flex items-center justify-center gap-8 flex-wrap mt-8">
            <div className="flex gap-8">
              {asSeenOnLogos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo}
                  alt={`Featured publication ${index + 1}`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Essentials Gallery */}
      <section className="py-20 bg-custom-gradient-2">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Browse Our Must-Have Event Day Essentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventEssentials.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                    <button className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
      {/* <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div> */}
      <div ref={reviewsRef}>
        {/* <Reviews /> */}
        <TestimonialSwiper />
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
