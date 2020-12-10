import React from 'react';
import './Contact.css';

export default function Form(props) {
  return (
    <div className="form-comp">
      <form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" />

        <label for="message">Message</label>
        <textarea id="message"></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
