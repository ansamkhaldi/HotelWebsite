import React from 'react';
import './Testimonials.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export default function Testimonials(data) {
  return (
    <div className="Test_div">
      <h1>Testimonials</h1>
      <div>"Calm, Serene, Retro – What a way to relax and enjoy"</div>
      <div> Mr. and Mrs. Baxter, UK</div>
      <div>
        <span>
          <IoIosArrowBack className="Back" />
        </span>
        <span>
          <IoIosArrowForward className="Back" />
        </span>
      </div>
    </div>
  );
}
