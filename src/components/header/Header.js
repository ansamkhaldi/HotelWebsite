import React from 'react';
import './Header.css';
import Navbar from '../Nav/Navbar';
import BookNow from '../../images/BookNow.png';
import Scroll from '../../images/Scroll.png';

export default function Header({ src, filter }) {
  return (
    <div className="header">
      <header
        style={{ backgroundImage: `url(${src})`, filter: `${filter}` }}
      ></header>
      <Navbar />
      <div className="Text_Head">
        <div className="WEl_head">WELCOME TO</div>
        <div className="LUX_head">LUXURY</div>
        <span className="HOT_head">HOTELS</span>
        <p className="P_head">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
      </div>
      <div className="Button_Head">
        <button>
          <span style={{ backgroundImage: `url(${BookNow})` }}></span>
          BOOK NOW
        </button>
      </div>
      <div className="Scroll_head">
        <div>Scroll</div>
        <button style={{ backgroundImage: `url(${Scroll})` }}></button>
      </div>
    </div>
  );
}
