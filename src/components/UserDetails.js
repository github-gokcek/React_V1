import React from "react";
import "./App.css";

const UserDetails = ({ user }) => {
  return (
    <div className="bottom-section">
      {user ? (
        <div>
          <h2>ID: {user._id}</h2>{" "}
          {/* MongoDB'deki gerçek ID'yi gösteriyor || _id */}
          <div className="user-info">
            <label>Adı:</label>
            <span>{user.firstName}</span>
          </div>
          <div className="user-info">
            <label>Soyadı:</label>
            <span>{user.lastName}</span>
          </div>
          <div className="user-info">
            <label>TC:</label>
            <span>{user.tc}</span>
          </div>
          <div className="user-info">
            <label>Telefon:</label>
            <span>{user.phone}</span>
          </div>
          <div className="user-info">
            <label>Tarih:</label>
            <span>{user.date}</span>
          </div>
          <div className="user-info">
            <label>Registered By:</label>
            <span>{user.registeredBy}</span>
          </div>
        </div>
      ) : (
        <p>Bir ID seçin...</p>
      )}
    </div>
  );
};

export default UserDetails;
