import React from 'react';
import '../ContactComponent/Contact.css';
import HeaderContact from '../ContactComponent/HeaderContact';
import TextContact from '../ContactComponent/TextContact';
import InfoContact from '../ContactComponent/InfoContact';
import Form from '../ContactComponent/Form';
export default function ContactUs(props) {
  return (
    <div>
      <HeaderContact></HeaderContact>
      <TextContact />
      <div id="form_Info">
        <InfoContact />
        <Form />
      </div>
    </div>
  );
}
