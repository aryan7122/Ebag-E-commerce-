import React from 'react';
import "./Footer.scss";
// import Newsletter from './Newsletter/Newsletter'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Pament from '../../assets/payments.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusntium doloreque laudantium, totam rem
                        aperiam, eaque ipsa quea illo inventore veritatis et
                        quasi architecto beatea vitae dicta sunt explicabo eaqueipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c_item">
                        <FaLocationArrow/>
                        <div className="text">
                            Kayaloram Rd, punnamaba, Kottankulagara, Alappuzha, Karela, 768751
                        </div>
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 0451 222 0268
                        </div>
                        <FaEnvelope />
                        <div className="text">
                            Email: Econectus@gmail.com
                        </div>
                    </div>
                </div>
               
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">HeadPhones</div>
                    <div className="text">Smart wathes</div>
                    <div className="text">Blutooth Speakers</div>
                    <div className="text">Wireless Earbuds</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Projectors</div>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="button_bar">
                <div className="botton_bar_contect">
                    <div className="text">
                        EBAG 2023 PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Pament} alt="" />
                </div>
            </div>
        </div>
    )
};

export default Footer;
