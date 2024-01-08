import React from 'react';
import './style.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
