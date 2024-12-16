// ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwnFnElHJLEux7pRpswcSbvzMsF7qVnBGV-7wQz2Bx-7fTUWLXLg7xBweHGAWTDkW9vpQ/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display loading message
    document.querySelector('.loading').style.display = 'block';

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: new FormData(e.target) });

      // Your logic for successful form submission
      if (response.ok) {
        document.getElementById('message-sent').style.display = 'block';
        setTimeout(() => {
          document.getElementById('message-sent').style.display = 'none';
          e.target.reset(); // Reset the form
        }, 5000);
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error!', error.message);
      document.querySelector('.error-message').innerText = 'An error occurred. Please try again later.';
    } finally {
      // Hide loading message
      document.querySelector('.loading').style.display = 'none';
    }
  };

  return (
    <form name="Request-Quote-God" role="form" className="php-email-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" className="form-control bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full" id="name" placeholder="Your Name" required />
      </div>
      {/* <div className="form-group mt-3">
        <input type="email" className="form-control bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full" name="email" id="email" placeholder="Your Email" required />
      </div> */}
      <div className="form-group mt-3">
        <input type="text" className="form-control bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full" name="subject" id="subject" placeholder="Subject" required />
      </div>
      <div className="form-group mt-3">
        <textarea className="form-control bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full" name="message" rows="5" placeholder="Message" required></textarea>
      </div>
      <div className="my-3">
        <div className="loading hidden">Loading</div>
        <div className="error-message hidden"></div>
        <div id="message-sent" className="sent-message hidden">Your message has been sent. Thank you!</div>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
