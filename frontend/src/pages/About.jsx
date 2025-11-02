import React from 'react';
import { FaTractor, FaCheckCircle, FaSeedling, FaUsers, FaHandshake, FaWarehouse, FaClock, FaHourglass, FaShoppingCart, FaExchangeAlt, FaCut, FaTruck, FaStar, FaPhone, FaPhoneAlt, FaBullseye, FaRocket } from 'react-icons/fa';
import '../CSS/About.css';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-container">
      {/* About Section */}
      <div className="about-text-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p className="ab-p">
            Welcome to <span>FrameEase</span>, your one-stop solution for renting high-quality tractor tools and farming equipment.
            We provide farmers with **affordable** and **reliable** rental services.
          </p>
          <div className='about-text-button'>
           <NavLink to="/">
            <button>Get Started </button>
            </NavLink> 
          </div>
        </div>
        <div className="about-home-img">
          <img src="/images/about-home4.webp" alt="About Us" />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="choose">Why Choose Us</div>

      <div className="features-grid">
        <div className="feature-box">
          <FaTractor className="feature-icon" />
          <h3>Wide Range of Equipment</h3>
          <p>We offer a variety of tools including plows, cultivators, and seeders.</p>
        </div>
        <div className="feature-box">
          <FaCheckCircle className="feature-icon" />
          <h3>Affordable Pricing</h3>
          <p>Budget-friendly rental plans without high purchasing costs.</p>
        </div>
        <div className="feature-box">
          <FaSeedling className="feature-icon" />
          <h3>Reliable Equipment</h3>
          <p>Regularly maintained for **optimal performance**.</p>
        </div>
        <div className="feature-box">
          <FaHandshake className="feature-icon" />
          <h3>Expert Support</h3>
          <p>Our team guides you in selecting the right tools.</p>
        </div>
      </div>
      {/* {How Its Work } */}

      <div className="choose">How Its Work</div>
      <div className="features-grid">
        <div className="feature-box">
          <FaWarehouse className="feature-icon" />
          <h3>Browse Our Inventory</h3>
          <p>Explore our wide range of tractor tools and select the ones you need.</p>
        </div>
        <div className="feature-box">
          <FaHourglass className="feature-icon" />
          <h3>Choose Your Rental Duration</h3>
          <p>Select a flexible rental period that suits your farming schedule.</p>
        </div>
        <div className="feature-box">
          <FaShoppingCart className="feature-icon" />
          <h3>Book Online </h3>
          <p>Reserve your tools through our easy-to-use online booking system.</p>
        </div>
        <div className="feature-box">
          <FaExchangeAlt className="feature-icon" />
          <h3>Return with Ease</h3>
          <p>Once your rental period is over, return the tools or request a pickup.</p>
        </div>
      </div>

      {/* Our Equipment Categories */}
      <div className="choose">Our Equipment Categories</div>
      <div className="features-grid">
        <div className="feature-box">
          <FaTractor className="feature-icon" />
          <h3>Tillage Equipment</h3>
          <p> Plows, disc harrows, rotary tillers.</p>
        </div>
        <div className="feature-box">
          <FaSeedling className="feature-icon" />
          <h3>Seeding & Planting</h3>
          <p>Seed drills, planters</p>
        </div>
        <div className="feature-box">
          <FaCut className="feature-icon" />
          <h3>Harvesting Tools</h3>
          <p>Reapers, threshers</p>
        </div>
        <div className="feature-box">
          <FaTruck className="feature-icon" />
          <h3>Material Handling and Other.</h3>
          <p>Trolleys, loaders.</p>
        </div>
      </div>

      {/* Who Can Benefit from Our Services?  */}

      <div className="features-grid">
        <div className="feature-box">
          <FaStar className="feature-icon" />
          <h3>Benefits from Our Services</h3>
          <p className='benefit' >
            <li>Small and large-scale farmers</li>
            <li>Agricultural contractors</li>
            <li>Landowners with occasional farming needs</li>
            <li>Organizations and institutions involved in agricultural projects</li>
          </p>
        </div>
        <div className="feature-box">
          <FaPhoneAlt className="feature-icon" />
          <h3>Customer Support & Assistance</h3>
          <p>We are committed to providing excellent customer service. If you have any questions regarding equipment selection, usage, or rental terms, our knowledgeable team is here to assist you.Get Started Today!</p>
        </div>
        <div className="feature-box start" >
          <FaRocket className="feature-icon" />
          <h3>Get Started Today!</h3>
          <p> Join hundreds of satisfied farmers and make your agricultural operations more efficient with [Your Website Name]. Rent the best tools for your farm today and experience the convenience of hassle-free farming equipment rentals.</p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>We are a passionate team dedicated to supporting farmers with the best equipment solutions.</p>
        {/* <div className="team-grid">
          <div className="team-card">
            <img src="/images/gaurav.jpg" alt="Founder" className="team-img" />
            <p className="team-role">Founder</p>
          </div>
          <div className="team-card">
            <img src="/images/Aryan-singh.jpg" alt="Co-Founder" className="team-img" />
            <p className="team-role">Co-Founder</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
