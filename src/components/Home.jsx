/*
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import CSS

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="home-container">
      <h1>Welcome, {user?.name}!</h1>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
*/
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";  // Import Navbar
import Sidebar from "./Sidebar"; // Import Sidebar
import "../styles/Home.css"; 

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <Sidebar handleLogout={handleLogout} />

        {/* Page Content */}
        <section className="content">
          <h1>Welcome, {user?.name}!</h1>
          <p>This is your dashboard.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
