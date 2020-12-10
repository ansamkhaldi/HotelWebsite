import { ImageData } from './RoomData';
import React from 'react';
import './Room.css';
import IconDot from '../images/iconDot.png';
import { BsFillPlusCircleFill } from 'react-icons/bs';
export default function ImageCard(props) {
  return (
    <div class="cards-Container">
      {ImageData.map((item, index) => {
        return (
          <div key={index} className={item.cName}>
            <div className="divCard">
              <img src={item.imageUrl} alt="images of rooms" />
              <div className="text">
                <span
                  className="dot"
                  style={{ backgroundColor: 'white' }}
                ></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              {/* <span className="icon">
                <image src={IconDot} />
              </span> */}
            </div>
            <h1>{item.title}</h1>
            <div className="div-But-Card">
              <div className="view">
                <BsFillPlusCircleFill id="iconPlus" />
                VIEW ROOM DETAILS
              </div>
              <div className="button">
                <button>$147 Avg/night</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
