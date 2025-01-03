import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../assets/faqData/faqData';
import { useNavigate } from 'react-router-dom';
import Car from '@mui/icons-material/DirectionsCar';
import './freqQues.css'
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

    if (!data) {
        return <div>Service not found.</div>;
    }

    return (
        <div>
            <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>

                <section className=" flex flex-col items-center ">

                    <div
                        ref={logoRef}
                        className="w-full h-1/5 text-white flex flex-col justify-center items-center gap-2 mb-16"
                    >
                        <div className="logo text-6xl font-lobster">Logo</div>
                        <div className="tagline text-lg font-light">Space for tagline</div>
                    </div>


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

                    <div className='Heading bg-white p-8 block mt-8 w-full'>

                        {data.map((item, index) => (
                            <details key={index} className="faqItem mb-4">
                                <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                                    <div className="text-2xl flex items-center">
                                        {item.Ques}
                                        <div className="faq-line"></div>
                                    </div>
                                    <span className="faq-toggle-icon transition-transform transform text-3xl ">+</span>
                                </summary>
                                <p className="text-gray-700 mt-2">{item.Ans}</p>
                            </details>

                        ))}



                    </div>
                </section>

            </div>
        </div>
    );
}


export default LimousineService;
