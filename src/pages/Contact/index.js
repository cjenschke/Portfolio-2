import React from 'react';
import './style.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
