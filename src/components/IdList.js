import React from "react";
import "./App.css";

const IdList = ({ userData, onIdClick }) => {
  return (
    <div className="top-section">
      <h2>Kullanıcı ID'leri</h2>
      <ul className="id-list">
        {userData.map((user, index) => (
          <li key={user._id} onClick={() => onIdClick(user._id)}>
            {index + 1} {/* Görüntüde sıralı ID  || indeksi 0 düşün*/}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdList;
