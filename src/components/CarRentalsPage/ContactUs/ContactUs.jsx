import React from 'react';
import './contactUs.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ContactUs = () => {
  return (
    <div className='ContactUsContainer'>
    <div className="ContactBox xl:w-1/2 w-11/12">
      <div className="title text-gradient">Contact Us</div>
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
  );
};

export default ContactUs;
