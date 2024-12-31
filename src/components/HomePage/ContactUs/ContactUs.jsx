import React from 'react';
import './contactUs.css';

const ContactUs = () => {
  return (
    <div className='ContactUsContainer'>
        <div className="ContactBox xl:w-1/2 w-11/12">
            <div className="title text-gradient">Contact Us</div>
            <div className="formContainer">
                <form>
                    <div className="formGroup">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;
