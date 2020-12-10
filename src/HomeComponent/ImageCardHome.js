import React from 'react';
import { HomeContent } from './HomeData';
import './home.css';

export default function ImageCardHome(props) {
  return (
    <div className="cards-Container">
      <div className="AllOurRoom">
        All our room types are including complementary breakfast
      </div>

      {HomeContent.map((item, index) => {
        return (
          <div key={index} className={item.cName}>
            <div className="div-But-home">
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
              <div className="buttonHome">
                <button>EXPLORE</button>
              </div>
            </div>

            <div className="divImag">
              <img src={item.imageUrl} alt="images of rooms" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
