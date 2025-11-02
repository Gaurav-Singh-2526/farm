
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = ({ onUpdateProfile }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    profileImage: "",
  });
// API URL 
const apiUrl = import.meta.env.VITE_API_URL;
  // Fetch user data on mount
  useEffect(() => {
    const id = localStorage.getItem("userId"); // stored at login
    if (!id) return;

    axios
      .post(`${apiUrl}/auth/getUserDetails`, { id })
      .then((res) => {
        setUser(res.data);
        setFormData({
          name: res.data.fullName || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          location: res.data.location || "",
          profileImage: res.data.profileImage || "",
        });
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

  if (!user) return <p>Loading...</p>;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle profile picture change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          profileImage: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.put(`${apiUrl}/auth/updateProfile/${user._id}`, formData);
      alert("Profile updated successfully!");
      navigate("/Account");
      if (onUpdateProfile) onUpdateProfile(formData);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group profile-image-group">
          <label>Profile Picture</label>
          <div className="image-upload">
            <div className="image-preview">
              {formData.profileImage ? (
                <img src={formData.profileImage} alt="Profile" />
              ) : (
                <div className="avatar-placeholder large">
                  {(formData.name && formData.name.charAt(0).toUpperCase()) || "?"}
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
            <button type="button" className="upload-btn">
              Change Photo
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
