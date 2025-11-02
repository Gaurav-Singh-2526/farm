import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  // API URL 
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/bookings/user`)
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <div className="bookings-container">
      <h3>My Bookings</h3>
      {bookings.map((b) => (
        <div key={b._id} className="booking-card">
          <img src={b.toolImage} alt={b.toolName} />
          <div className="booking-info">
            <h4>{b.toolName}</h4>
            <p><strong>Date:</strong> {b.date}</p>
            <p><strong>Status:</strong> {b.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
