import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './contact.css'
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

                        <div className="Heading text-3xl font-semibold md:text-4xl flex flex-row items-center">

                        </div>
                    </div>


                </section>
                <div className='ContactUsContainer'>
                    <div className="ContactBox xl:w-1/2 w-11/12">
                        <div className="title text-gradient font-lobster">Contact Us</div>
                        <div>Fill out this short form and we will contact you the same business day.</div>
                        <div className="formContainer text-xs xl:text-xl">
                            <form>
                                {/* Name Field */}
                                <div className="formGroup">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                </div>

                                {/* Email Field */}
                                <div className="formGroup">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                </div>

                                {/* Phone Number Field */}
                                <div className="formGroup">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        pattern="^\+?[1-9]\d{1,14}$"
                                        title="Please enter a valid phone number (e.g., +1234567890 or 1234567890)."
                                        required
                                    />
                                </div>

                                {/* Limousine Service Dropdown */}
                                <div className="formGroup selectGroup">
                                    <label htmlFor="limousineService">Limousine Service</label>
                                    <div className="selectContainer">
                                        <select id="limousineService" name="limousineService" required>
                                            <option value="">Select a service</option>
                                            <option value="airport">Airport Limousine Service</option>
                                            <option value="wedding">Wedding Limousine Service</option>
                                            <option value="prom">Prom Limousine Service</option>
                                            <option value="winery">Winery Tours</option>
                                            <option value="nightsOut">Nights Out on the Town</option>
                                            <option value="bachelor">Bachelor and Bachelorette Parties</option>
                                            <option value="corporate">Corporate</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="formGroup">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="submitButton">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LimousineService;
