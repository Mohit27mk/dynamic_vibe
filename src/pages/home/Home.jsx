import React, { useRef } from 'react';
import HomeIntro from '../../components/HomeIntro/HomeIntro';
import AboutUs from '../../components/AboutUs/AboutUs';
import Services from '../../components/Services/Services';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const homeIntroRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-custom-gradient w-screen min-h-screen">
      <div ref={homeIntroRef}>
      <HomeIntro />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <Reviews />
      <Footer scrollToSection={scrollToSection} aboutUsRef={aboutUsRef} servicesRef={servicesRef} homeIntroRef={homeIntroRef} />
    </div>
  );
};

export default Home;
