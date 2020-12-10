import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer(props) {
  return (
    <>
      <footer>
        <div class="triangle-up"></div>
        <div className="footer">
          <div className="div1">
            <div id="lux">LUXURY</div>
            <div id="hotel">HOTELS</div>
            <div>
              497 Evergreen Rd. Roseville, CA 95673
              <div>+44 345 678 903</div>
              luxury_hotels@gmail.com
            </div>
          </div>
          <div className="div2">
            <div>About Us</div>
            <div>Contact</div>
            <div>Terms & Conditions</div>
          </div>
          <div className="div3">
            <div>
              <span>
                <FaFacebookF />
              </span>
              Facebook
            </div>
            <div>
              <span>
                <AiOutlineTwitter />
              </span>
              Twitter
            </div>
            <div>
              <span>
                <AiOutlineInstagram />
              </span>
              Instagram
            </div>
          </div>
          <div className="div4">
            <div>Subscribe to our newsletter</div>
            <div className="footer_email">
              <input type="text" placeholder="Email Address"></input>
              <button>OK</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
