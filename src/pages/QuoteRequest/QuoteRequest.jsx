import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './quoteRequest.css'
import logo from "../../assets/images/logo.png"

const QuoteRequest = () => {
    const [isFixed, setIsFixed] = useState(false);

    // Refs for sections
    const logoRef = useRef(null);
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
    }};


    return (
        <div>
            <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
             <section className=" flex flex-col items-center ">
                { /* Logo Section */}
                <div ref={logoRef} className="w-full h-1/5 text-white flex flex-col justify-center items-center gap-2 mb-16">
                    <img src={logo} alt="Logo" className="logo w-40 h-32" />
                    {/* <div className="tagline text-lg font-light">Space for tagline</div> */}
                </div>
                {/* Navbar */}
                <div className={`Navbar w-full bg-black/50 text-white flex flex-row flex-wrap justify-center md:gap-12 gap-1 items-center shadow-lg ${isFixed ? 'fixed-navbar' : ''}`}>
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
                <span onClick={()=>navigate('/request')}>Quote Request</span> 
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

                            {/* Email and Phone Number Fields */}
                            <div className="formGroup flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div className="w-1/2">
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
                            </div>

                            {/* Location and Event Date Fields */}
                            <div className="formGroup flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="location">Location (Town)</label>
                                    <input type="location" id="location" name="location" placeholder="Enter your location" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="eventDate">Approximate Event Date</label>
                                    <input type="date" id="eventDate" name="eventDate" required 
                                        min={new Date().toISOString().split('T')[0]}
                                        placeholder='Enter your event date'
                                    />
                                </div>
                            </div>

                            {/* Number of Guests and Event Date Fields */}
                            <div className="formGroup flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="guests">Number of Guests</label>
                                    <input type="number" id="guests" name="guests" placeholder="Enter number of guests" required />
                                </div>
                                <div className="w-1/2">
                                <label htmlFor="limousineService">Please Select An Event</label>
                                    <div className="selectContainer">
                                        <select id="limousineService" name="limousineService" required>
                                            <option value="">Select An Event</option>
                                            <option value="airport">Graduation</option>
                                            <option value="wedding">Bridal Shower</option>
                                            <option value="prom">Baby Shower</option>
                                            <option value="winery">Communion</option>
                                            <option value="nightsOut">Engagement Party</option>
                                            <option value="bachelor">Quincenera</option>
                                            <option value="corporate">Backyard Party</option>
                                            <option value="corporate">Holiday Party</option>
                                            <option value="corporate">Birthday Party</option>
                                            <option value="corporate">Wedding</option>
                                            <option value="corporate">Sweet 16</option>
                                            <option value="corporate">Wedding</option>
                                            <option value="corporate">Bar / Bat Mitzvah</option>
                                            <option value="corporate">Corporate</option>
                                            <option value="corporate">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Package Dropdown */}
                            <div className="formGroup selectGroup">
                                <label htmlFor="limousineService">Do you need a package?</label>
                                <div className="selectContainer">
                                    <select id="limousineService" name="limousineService">
                                        <option value="">Select A Package</option>
                                        <option value="airport">Tent Package</option>
                                        <option value="wedding">Tent & Liner Package</option>
                                        <option value="prom">Clear Top Package</option>
                                        <option value="winery">Sailcloth Package</option>
                                        <option value="nightsOut">Rustic Package</option>
                                        <option value="bachelor">Lounge Package</option>
                                        <option value="corporate">Décor</option>
                                        <option value="corporate">Others</option>
                                        <option value="wedding">No</option>
                                    </select>
                                </div>
                            </div>

                            <div className="formGroup">
                                <label htmlFor="tentType">What type of tent are you looking for? (Check ONE)</label>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="tentType" value="tentOnly" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Tent Only</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="tentType" value="tentPackage" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Tent Package with Tables, Chairs and Lights</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="tentType" value="weddingTentPackage" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Wedding Tent Package</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="tentType" value="customTentPackage" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Custom Tent Package and Accessories</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="tentType" value="tablesChairsOnly" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Tables and/Or Chairs Only (Only Available Fall and Winter Months)</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="tentType" value="noTent" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2">No Tent</span>
                                    </label>
                                </div>
                            </div>

                            {/* Tables Checkboxes */}
                            <div className="formGroup">
                                <label htmlFor="tables">What tables are you interested in? (Check all that apply)</label>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="tables" value="roundTables" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Round Tables</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="tables" value="farmTables" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Farm Tables</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="tables" value="banquetTables" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Banquet Tables</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="tables" value="cocktailTables" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Cocktail Tables (High or Low)</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="tables" value="noTables" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">No Tables</span>
                                    </label>
                                </div>
                            </div>

                            {/* Chairs Checkboxes */}
                            <div className="formGroup">
                                <label htmlFor="chairs">What chairs are you interested in? (Check all that apply)</label>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="chairs" value="standardFolding" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Standard Folding</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="chairs" value="gardenFolding" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Garden Folding</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="chairs" value="fruitwoodFolding" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Fruitwood Folding</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="chairs" value="crossback" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Crossback</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="chairs" value="chiavari" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Chiavari</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="chairs" value="barstools" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Barstools</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="chairs" value="noChairs" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">No Chairs</span>
                                    </label>
                                </div>
                            </div>

                            {/* Lighting Checkboxes */}
                            <div className="formGroup">
                                <label htmlFor="lighting">What type of lighting are you interested in? (Check all that apply)</label>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="basicGlobeLights" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Basic Globe Lights</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="bistroLightingPackage" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Bistro Lighting Package</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="bistroLightingPerimeter" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Bistro Lighting Perimeter</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="rusticChandeliers" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Rustic Chandeliers</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="crystalChandeliers" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Crystal Chandeliers</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="highBayLight" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">High Bay Light</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="ledRingChandelier" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">LED Ring Chandelier</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="ledParCan" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">LED Par Can</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="lighting" value="noLighting" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">No Lighting</span>
                                    </label>
                                </div>
                            </div>

                            {/* Dance Floor Checkboxes */}
                            <div className="formGroup">
                                <label htmlFor="danceFloor">What type of dance floor are you interested in? (Check all that apply)</label>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="danceFloor" value="parquet" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Parquet</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="danceFloor" value="premium" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Premium (Light Maple, Dark Maple, Smoked Oak, Black Oak, White Oak, Sandalwood)</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="danceFloor" value="fastDeck" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Fast Deck Portable Flooring</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="danceFloor" value="astroturf" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Astroturf (Green)</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="danceFloor" value="noDanceFloor" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">No Dance floor</span>
                                    </label>
                                </div>
                            </div>

                            {/* Bar Checkboxes */}
                            <div className="formGroup">
                                <label htmlFor="bar">What type of bar are you interested in? (Check all that apply)</label>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="stainlessSteelBar" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Stainless Steel Bar</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="wineBarrel2" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Wine Barrel Bar – 2 Barrels</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="wineBarrel3" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Wine Barrel Bar – 3 Barrels</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="rusticBar" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Rustic Bar</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="whiteBackBar" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">White Back Bar</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="beverageCart" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Beverage Cart</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="ledBar" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">LED Bar</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="chillStation" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Chill Station</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="bar" value="noBar" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">No Bar</span>
                                    </label>
                                </div>
                            </div>

                            {/* Accessories Checkboxes */}
                            <div className="formGroup">
                                <label htmlFor="accessories">What accessories are you interested in? (Check all that apply)</label>
                                <div className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="loungeFurniture" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Lounge Furniture</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="linens" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Linens</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="heaters" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Heaters</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="fans" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Fans</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="staging" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Staging</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="backdrops" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Backdrops</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="pipeAndDrape" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">Pipe and Drape</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" name="accessories" value="noAccessories" className="form-checkbox h-5 w-5 text-blue-600" />
                                        <span className="ml-2">No Accessories</span>
                                    </label>
                                </div>
                            </div>

                            {/* More Info Field */}
                            <div className="formGroup">
                                <label htmlFor="message">More Info</label>
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


export default QuoteRequest;
