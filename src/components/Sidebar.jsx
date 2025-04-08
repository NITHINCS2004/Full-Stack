/*import React from "react";
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillGearFill } from "react-icons/bs"; 
import "../styles/Sidebar.css"; // Import CSS for styling

const Sidebar = ({ handleLogout }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li><BsFillHouseDoorFill /> Home</li>
        <li><BsFillPersonFill /> Profile</li>
        <li><BsFillGearFill /> Settings</li>
      </ul>
      
      
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </aside>
  );
};

export default Sidebar;
*//*
import React from "react";
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillGearFill } from "react-icons/bs"; 
import "../styles/Sidebar.css"; // Import CSS

const Sidebar = ({ setSection, handleLogout }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setSection("home")}><BsFillHouseDoorFill /> Home</li>
        <li onClick={() => setSection("profile")}><BsFillPersonFill /> Profile</li>
        <li onClick={() => setSection("settings")}><BsFillGearFill /> Settings</li>
      </ul>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </aside>
  );
};

export default Sidebar;
*/
/*
import React from "react";
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillGearFill } from "react-icons/bs"; 
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, setSection, handleLogout }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => setSection("home")}><BsFillHouseDoorFill /> Home</li>
        <li onClick={() => setSection("profile")}><BsFillPersonFill /> Profile</li>
        <li onClick={() => setSection("settings")}><BsFillGearFill /> Settings</li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </aside>
  );
};

export default Sidebar;*/
import React from "react";
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, setSection, handleLogout }) => {
  const navigate = useNavigate();

  const handleClick = (section) => {
    setSection(section);
    if (section === "profile") {
      navigate("/profile");
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => setSection("home")}><BsFillHouseDoorFill /> Home</li>
        <li onClick={() => handleClick("profile")}><BsFillPersonFill /> Profile</li>
        <li onClick={() => setSection("settings")}><BsFillGearFill /> Settings</li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </aside>
  );
};

export default Sidebar;

