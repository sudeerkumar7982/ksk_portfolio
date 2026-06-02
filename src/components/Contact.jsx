import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const { email, location, responseTime } = portfolioData.personalInfo;
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Web3Forms API Integration
    // TODO: Put your actual Access Key here
    const accessKey = "4a5876ff-62e1-4a41-8ab7-37b1761fe60f"; 
    
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      alert("Please get an Access Key from web3forms.com and paste it in Contact.jsx!");
      setStatus('');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        alert("Failed to send message: " + result.message);
        setStatus('');
      }
    } catch (error) {
      alert("Something went wrong while sending!");
      setStatus('');
    }

    // Reset status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Let's discuss your next project or just say hello!</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-subtitle-accent">Let's Connect</h3>
          <p className="contact-desc">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>

          <div className="info-item">
            <div className="info-icon"><FiMail size={20} /></div>
            <div className="info-text">
              <span className="info-label">Email</span>
              <span className="info-value">{email}</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FiMapPin size={20} /></div>
            <div className="info-text">
              <span className="info-label">Location</span>
              <span className="info-value">{location}</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FiClock size={20} /></div>
            <div className="info-text">
              <span className="info-label">Response Time</span>
              <span className="info-value">{responseTime}</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form-white">
            <div className="form-row">
              <div className="form-group-white">
                <label>First Name <span>*</span></label>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group-white">
                <label>Last Name <span>*</span></label>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group-white">
              <label>Email <span>*</span></label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group-white">
              <label>Subject <span>*</span></label>
              <div className="select-wrapper">
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="" disabled>Select a subject</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="Networking">Networking</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group-white">
              <label>Message <span>*</span></label>
              <textarea name="message" placeholder="Tell me about your project or how I can help you..." rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn-submit" disabled={status === 'submitting'} style={{ opacity: status === 'submitting' ? 0.7 : 1 }}>
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
