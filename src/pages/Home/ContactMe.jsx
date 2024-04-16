import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export default function ContactMe() {

  const [firstName, setName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [message, setMessage] = useState('');  

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const serviceId = 'service_18j2j4p';
    const templateId = 'template_pimweuz';
    const publicKey = 'aLBCCukTCfaUDkvse'; 

    const templateParams = {
      from_name: firstName, 
      from_lastName: lastName,
      from_email: email, 
      from_phone: phone,
      to_name: 'Harleen Singh',
      message: message,
    }; 

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setName(''); 
      setLastName('');
      setEmail(''); 
      setPhone('');
      setMessage(''); 
      location.reload(true)
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
        My inbox is always open. I will try my best to get back to you!
        </p>
      </div>
      <form onSubmit={handleSubmit}   className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name" 
              value={firstName} 
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email" 
              value={email}  
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number" 
              value={phone}  
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            value={message}  
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
