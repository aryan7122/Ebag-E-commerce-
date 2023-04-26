import React from 'react';
import "./Newsletter.scss";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

const Newsletter = () => {
    return (
        <div className="newsletter_section">
            <div className="newslatter_content">
                <span className="small_text">Newsletter</span>
                <span className="big_text">Sign up for latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="Eemail Address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordence eith our Privacy policy</div>
                <div className="social_icons">
                    <div className="icon">
                        <FaFacebookF/>
                    </div>
                    <div className="icon">
                        <FaTwitter/>
                    </div>
                    <div className="icon">
                        <FaInstagram/>
                    </div>
                    <div className="icon">
                        <FaLinkedinIn/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
