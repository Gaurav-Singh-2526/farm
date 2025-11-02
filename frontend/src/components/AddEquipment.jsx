import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddEquipment = ({ onEquipmentAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', imageFile); // 'image' must match the backend field name

      // Post the form data to your backend API
      const response = await axios.post('http://localhost:5000/api/equipment', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      // Call the callback to update equipment list in the Home component
      onEquipmentAdded(response.data);

      // Clear form fields and reset file input
      setName('');
      setDescription('');
      setImageFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Equipment Name"
        required
        style={{ margin: '5px', padding: '8px' }}
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        style={{ margin: '5px', padding: '8px', width: '300px', height: '60px' }}
      />
      <br />
      <input 
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => setImageFile(e.target.files[0])}
        required
        style={{ margin: '5px', padding: '8px' }}
      />
      <br />
      <button 
        type="submit" 
        style={{
          padding: '10px 20px', 
          background: '#2e7d32', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px'
        }}
      >
        Add Equipment
      </button>
    </form>
  );
};

export default AddEquipment;
