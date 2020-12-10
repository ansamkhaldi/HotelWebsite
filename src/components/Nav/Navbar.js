import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { NavbarData } from './NavData';

export default function Navbar(props) {
  return (
    <nav className="flex-container">
      <div className="flex-left">
        <div>
          <span className="LUX">LUXURY</span>
          <span className="HOTEL">HOTELS</span>
        </div>
      </div>
      <div className="flex-right">
        <ul className="nav-menu-items">
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} className="nav-link">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
