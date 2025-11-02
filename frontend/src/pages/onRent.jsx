// now live code working code 


import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../CSS/Onrent.css";

function Onrent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    toolName: "",
    location: "",
    price: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    toast.dismiss();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("toolName", formData.toolName);
    data.append("location", formData.location);
    data.append("price", formData.price);
    data.append("image", formData.image);
    // API URL 
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const response = await axios.post(`${apiUrl}/api/upload`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ Upload successful!");
      console.log("Upload success:", response.data);

      setTimeout(() => navigate("/"), 1500);

      setFormData({ toolName: "", location: "", price: "", image: null });
      setPreview(null);
    } catch (error) {
      console.error("❌ Upload failed:", error);
      toast.error("Upload failed! Please try again.");
    }
  };

  return (
    <div className="onrent-container">
      <div className="onrent-card">
        <h2 className="onrent-title">📤 Upload Tool for Rent</h2>

        <form className="onrent-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Tool Name</label>
            <input
              type="text"
              name="toolName"
              placeholder="Enter tool name"
              value={formData.toolName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Price (₹/day)</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Tool Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <button type="submit" className="upload-btn">
            Upload Now 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default Onrent;
