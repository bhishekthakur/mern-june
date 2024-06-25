import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            fugiat corporis quod ipsam, aliquid quam dolore alias temporibus,
            esse laudantium odit facere excepturi ratione corrupti quo ullam
            error dicta dolorum?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              paschimvihar, Punjabi bagh, Delhi, 110063
            </div>
          </div>

          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 6203109188</div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: thakur11abhishek2@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            HEADSTORE 2024 CREATED BY AB DEV. PREMIUM E-COMMERCE SOLUTIONS
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
