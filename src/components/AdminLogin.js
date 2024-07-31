import React, { useState } from "react";
import "./App.css";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onLogin(username, password);
    } else if (username === "admin2" && password === "password2") {
      onLogin(username, password);
    } else {
      setErrorMessage("Yanlış kullanıcı adı veya şifre.");
    }
  };

  return (
    <div className="admin-login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Giriş Yap</button>
        {errorMessage && <div className="error-popup">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;
