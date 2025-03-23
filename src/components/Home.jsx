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
*//*
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
     
      <Navbar />

      
      <div className="main-content">
       
        <Sidebar handleLogout={handleLogout} />

       
        <section className="content">
          <h1>Welcome, {user?.name}!</h1>
          <p>This is your dashboard.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/Home.css"; 

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [section, setSection] = useState("home"); // Track current section

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />

      <div className="main-content">
        {/* Sidebar */}
        <Sidebar setSection={setSection} handleLogout={handleLogout} />

        {/* Dynamic Content Area */}
        <section className="content">
          {section === "home" && <h1>Welcome, {user?.name}!</h1>}
          {section === "profile" && <h1>Profile Section</h1>}
          {section === "settings" && <h1>Settings Section</h1>}
        </section>
      </div>
    </div>
  );
};

export default Home;
