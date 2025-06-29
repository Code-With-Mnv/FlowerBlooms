import React, { useState } from "react";
import "./Auth.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formData;
    const storedPass = localStorage.getItem("password");

    if (password !== storedPass) {
      alert("Password is incorrect!");
      return;
    }

    // ✅ Save name/email as login proof
    localStorage.setItem("name", email);

    navigate("/gallery");
  };

  return (
    <div className="login-section">
      <div className="login-content">
        <h1>Login to FlowerBlooms</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
