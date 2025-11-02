import "../CSS/ViewTools.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchTool from "../components/SearchTool";

function ViewTools() {
  const [tools, setTools] = useState([]);
  // API URL 
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/tools`);
        setTools(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch tools:", error);
      }
    };
    fetchTools();
  }, []);

  return (
    <div className="view-tools-page">
      <div className="tools">


        <h2>Available Tools for Rent</h2>
        <div className="seo">
          <SearchTool onResults={setTools} />
        </div>
      </div>

      <div className="tools-container">
        {tools.length > 0 ? (
          tools.map((tool) => (
            <div className="tool-card" key={tool._id}>
              <img src={tool.imageUrl} alt={tool.toolName} />
              <h3>{tool.toolName}</h3>
              <p>Location: {tool.location}</p>
              <p>Price: ₹{tool.price}/day</p>
              <button>Buy Now</button>
            </div>
          ))
        ) : (
          <p>No tools available for rent.</p>
        )}
      </div>
    </div>
  );
}

export default ViewTools;
