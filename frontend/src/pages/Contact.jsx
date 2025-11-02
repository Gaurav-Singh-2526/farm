// Contact.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../CSS/contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

console.log("Loaded PUBLIC_KEY:", PUBLIC_KEY); // Debug: Check if PUBLIC_KEY is loaded correctly

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting with PUBLIC_KEY:", PUBLIC_KEY); // Debug: Confirm PUBLIC_KEY at submission

    if (!PUBLIC_KEY) {
      console.error("PUBLIC_KEY is missing. Check your .env file and restart the server.");
      return;
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: `${formData.message}\n\nSender's Email: ${formData.email}`,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setSubmittedData({ name: formData.name, email: formData.email });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below.</p>
      </header>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <motion.div className="form-group" whileFocus={{ scale: 1.05 }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div className="form-group" whileFocus={{ scale: 1.05 }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div className="form-group" whileFocus={{ scale: 1.05 }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSent ? "Message Sent!" : "Send Message"}
          </motion.button>
        </form>

        <div className="contact-details">
          <h2>Our Details</h2>
          <p>Email: contact@tractorrent.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Tractor Lane, Farmville, India</p>

          <h3>Recent Submission:</h3>
          {isSent && submittedData && (
            <div className="submitted-details">
              <p>
                <strong>Name:</strong> {submittedData.name}
              </p>
              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
            </div>
          )}

          <div className="social-media-links">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
