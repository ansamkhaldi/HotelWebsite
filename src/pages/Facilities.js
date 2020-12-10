import React from 'react';
import Header from '../components/header/Header';
import Paragraph from '../FacilitiesComponent/Paragraph';
import FacilitiesImag from '../images/FacilitiesImag.png';
import AxiosImag from '../FacilitiesComponent/AxiosImag';
import Testimonials from '../components/Testimonials/Testimonials';

function Facilities(props) {
  return (
    <div>
      <Header src={FacilitiesImag} filter="brightness(0.5)" />
      <Paragraph />
      <AxiosImag />
      <Testimonials />
    </div>
  );
}

export default Facilities;
