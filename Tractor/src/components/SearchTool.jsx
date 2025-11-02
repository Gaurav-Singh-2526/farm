import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useState } from "react";
import "../CSS/SearchTool.css";
const SearchTool = ({ onResults }) => {
    const [query, setQuery] = useState("");

    // handle the search functionality
    const handleSearch = async (e) => {
        const value = e.target.value;
           setQuery(value);
           console.log("Searching:", value); 

// API URL 
const apiUrl = import.meta.env.VITE_API_URL;

 if (value.trim() === "") {
      // If input is empty, show all tools again
    const res = await axios.get(`${apiUrl}/api/tools`);

      onResults(res.data);
      return;
    }


    try {
      const res = await axios.get(
        `${apiUrl}/api/tools/search?name=${value}`
      );
      onResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
    };

    return (
        <>
            <section className="searchBar">
                <input type="text"
                    placeholder='  Search'
                    className='search'
                    value={query}
                    onChange={handleSearch} />
                <CiSearch className='search-icon' />
            </section>
        </>
    )
}
export default SearchTool;