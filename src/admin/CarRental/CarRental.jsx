import React, { useState } from "react";
import "./CarRental.css";  
import { FaBars, FaCar, FaUsers, FaGlassCheers } from "react-icons/fa";
import dynamicmainpagelogo from '../../assets/adminImages/dynamicmainpagelogo.png'
import { Link,useLocation  } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        {/* Toggle Button */}
        <button  className={`toggle-btn ${isSidebarOpen ? "open" : "closed"}`} onClick={toggleSidebar}>
          {<FaBars />}
        </button>

        {/* Logo Section */}
        <div className="logo-container">
  <img
    src={isSidebarOpen 
      ? dynamicmainpagelogo 
      : dynamicmainpagelogo} 
    alt="Logo"
    className="logo"
  />
</div>

        {/* Menu Items */}
    {/* Menu Items */}
    <ul>
          <li className={location.pathname === "/admin/dashboard/car-rental" ? "active" : ""}>
            <Link to="/admin/dashboard/car-rental">
              <FaCar className="icon" />
              {isSidebarOpen && <span>Car Rental</span>}
            </Link>
          </li>
          <li className={location.pathname === "/admin/dashboard/party-rental" ? "active" : ""}>
            <Link to="/admin/dashboard/party-rental">
              <FaGlassCheers className="icon" />
              {isSidebarOpen && <span>Party Rental</span>}
            </Link>
          </li>
          <li className={location.pathname === "/admin/dashboard/users" ? "active" : ""}>
            <Link to="/admin/dashboard/users">
              <FaUsers className="icon" />
              {isSidebarOpen && <span>Users</span>}
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={`main-content ${isSidebarOpen ? "" : "shrink"}`}>
        <h2>Booking Summaryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h2>
        <h2>Booking Summary</h2>
        <h2>Booking Summary</h2>

      </main>
    </div>
  );
};

export default Dashboard;
