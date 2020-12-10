import React from 'react';
import './Contact.css';
import { BsArrowRight } from 'react-icons/bs';

export default function InfoContact(props) {
  return (
    <div className="info-contact">
      <p id="p_info"> 497 Evergreen Rd. Roseville, CA 95673</p>
      <div id="iconArrow">
        <div className="flex-item-left ">View map</div>
        <div className="flex-item-right ">
          <BsArrowRight size="50" />
        </div>
      </div>
      <p>Phone: +44 345 678 903</p>
      <p>Email: luxury_hotels@gmail.com</p>
    </div>
  );
}
