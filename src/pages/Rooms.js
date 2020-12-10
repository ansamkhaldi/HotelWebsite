import React from 'react';
import Header from '../components/header/Header';
import RoomImag from '../images/RoomImag.png';

import ImageCard from '../RoomComponent/ImageCard';
import Testimonials from '../components/Testimonials/Testimonials';

function Rooms(props) {
  return (
    <div>
      <Header src={RoomImag} filter="brightness(0.4)" />
      <ImageCard />
      <Testimonials />
    </div>
  );
}

export default Rooms;
