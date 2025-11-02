import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../CSS/HomeData.css';
import AddEquipment from '../components/AddEquipment';

const Home = () => {
  const [data, setData] = useState([]);
  // const [equipment, setEquipment] = useState([]);
  // const [loading, setLoading] = useState(true);

  // Fetch equipment from the backend
  // const fetchEquipment = async () => {
  //   try {
  //     const res = await axios.get('/api/equipment');
  //     setEquipment(res.data);
  //     console.log("Fetched equipment:", res.data);
  //   } catch (err) {
  //     console.error('Error fetching equipment:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchEquipment();
  // }, []);

  useEffect(()=>{
    fetch('/data.json')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error('Error loading JSON:', error));
  },[]);
  // Callback to add new equipment to the state
  const handleEquipmentAdded = (newItem) => {
    console.log("New equipment added:", newItem);
    setEquipment((prevEquipment) => [...prevEquipment, newItem]);
  };

  return (
    <section className="home-container">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <h1>Rent Tractor Tools with Ease 🚜</h1>
        <p>Your trusted partner for affordable and reliable farming equipment.</p>
        <NavLink to="/about">
          <button className="cta-button">Learn More</button>
        </NavLink>
      </motion.div>

      {/* About Our Services */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="about-services"
      >
        <h2>What We Offer</h2>
        <p>
          From tillage equipment to harvesting tools, find everything you need to boost your agricultural productivity.
        </p>
      </motion.div>

      {/* Featured Equipment */}
      {/* <div className="featured-equipment">
        <h2>Featured Equipment</h2>
        {/* Render the AddEquipment form *}
        <AddEquipment onEquipmentAdded={handleEquipmentAdded} />

        {loading ? (
          <p>Loading equipment...</p>
        ) : equipment.length === 0 ? (
          <p>No equipment available.</p>
        ) : (
          <div className="equipment-grid">
            {equipment.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="equipment-card"
              >
                <img src={item.imageUrl} alt={item.name} className="equipment-img" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div> */}

      {/* //change div */}

      {/* Featured Equipment */}
      <div className="featured-equipment">
        <h2>Featured Equipment</h2>
        <div className="equipment-grid">
        {data.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="equipment-card"
              >
          <img src={item.imageUrl} alt={item.name} className="equipment-img" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
          </motion.div>
        ))}
        </div>
      </div>

      {/* How It Works */}
      <motion.div
        className="how-it-works"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>How It Works</h2>
        <ol>
          <li>Browse and select tools.</li>
          <li>Choose rental duration.</li>
          <li>Book online and get it delivered.</li>
          <li>Return with ease.</li>
        </ol>
      </motion.div>

      {/* Final Call to Action */}
      <motion.div
        className="cta-final"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Ready to Start?</h2>
        <NavLink to="/inventory">
          <button className="cta-button">Browse Inventory</button>
        </NavLink>
      </motion.div>
    </section>
  );
};

export default Home;

