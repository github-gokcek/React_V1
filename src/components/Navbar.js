// components/Navbar.js
import React from "react";
import axios from "axios";
import "./App.css";

const Navbar = ({ onFetchData }) => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      onFetchData(response.data); //! Önemli
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <nav className="navbar">
      <button>Ekran Görüntüsü Al</button>
      <button>Yazdır</button>
      <button onClick={fetchData}>İlk 100 Kaydı Getir</button>
    </nav>
  );
};

export default Navbar;
