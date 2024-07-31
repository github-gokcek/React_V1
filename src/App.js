import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import AdminLogin from "./components/AdminLogin";
import Navbar from "./components/Navbar";
import IdList from "./components/IdList";
import UserDetails from "./components/UserDetails";
import ThumbnailView from "./components/ThumbnailView";
import ImagePreview from "./components/ImagePreview";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);

  const handleFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLogin = (username, password) => {
    if (
      (username === "admin" && password === "password") ||
      (username === "admin2" && password === "password2")
    ) {
      setIsLoggedIn(true);
      setLoggedInAdmin(username);
    }
  };
  const handleAddUser = async (userData) => {
    try {
      await axios.post("http://localhost:5000/users", userData, {
        headers: {
          Authorization: loggedInAdmin,
        },
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleIdClick = async (id) => {
    try {
      console.log(`Fetching user with ID: ${id}`);
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setSelectedUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar onFetchData={handleFetchData} />
          <div className="main-content">
            <div className="left-panel">
              <IdList userData={userData} onIdClick={handleIdClick} />
              <UserDetails user={selectedUser} />
            </div>
            <div className="center-panel">
              <ThumbnailView
                userData={userData}
                onThumbnailClick={handleThumbnailClick}
              />
            </div>
            <div className="right-panel">
              <ImagePreview selectedImage={selectedImage} />
            </div>
          </div>
        </>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
