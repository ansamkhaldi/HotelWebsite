import React from 'react';
import Navbar from '../components/Nav/Navbar';
import './Contact.css';

export default function HeaderContact(props) {
  return (
    <div className="headerContact">
      <header className="header_Blue"></header>
      <Navbar />
      <div className="Text_Header">
        <h1> CONTACT-US</h1>
      </div>
    </div>
  );
}
