import React, { useState } from "react";
import axios from "axios"; // Use Axios for API calls
import "./login.css";
import dynamicmainpagelogo from '../../assets/adminImages/dynamicmainpagelogo.png'
import { useNavigate } from "react-router-dom";
import { stringify } from "ajv";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear any previous error messages
    setError("");

    try {
      // Replace with your actual API endpoint
      const apiUrl = "http://localhost:5000/api/v1/admin/email-login";

      // Make the API call
      const response = await axios.post(apiUrl, {
        email: email,
        password: password,
      });
console.log(response.data);
      // Handle success
      if (response.data) {
        console.log(response.data.data);

        alert("Login successful!");
        // Redirect user or save the token in local storage
        localStorage.setItem("token", stringify(response.data.data));
        navigate("/admin/dashboard/car-rental"); // Redirect using React Router
      }
    } catch (err) {
      // Handle errors
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="page-logo">
        <img
          src={dynamicmainpagelogo}
          alt="Company Logo"
          className="logo-login"
        />
      </div>
      <div className="login-container">
        <div className="form-container">
          <h2 className="login-title">Admin Panel Login</h2>
          {error && <p className="error-message">{error}</p>} {/* Show error */}
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>
            <button type="submit" className="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
