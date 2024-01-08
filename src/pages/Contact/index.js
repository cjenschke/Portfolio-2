// import React from 'react';
// import './style.css';

// function Contact() {
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   // };

//   return (
//     <div className="contact">
//       <h2>Contact Me</h2>
//       <form
//         // onSubmit={handleSubmit}
//         name="contact"
//         method="POST"
//         data-netlify="true"
//       >
//         <input type="hidden" name="form-name" value="contact" />
//         <input type="text" name="name" placeholder="Your Name" required />
//         <input type="email" name="email" placeholder="Your Email" required />
//         <textarea name="message" placeholder="Your Message" required></textarea>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import './style.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const form = event.target;
      const formData = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error('Network response was not OK');
      }
    } catch (error) {
      setError('There was a problem submitting your form');
    } finally {
      setSubmitting(false);
    }
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
        <button type="submit" disabled={submitting}>
          Send
        </button>
      </form>
      {submitting && <p>Sending your message...</p>}
      {submitted && <p>Thank you for your message!</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Contact;
