import React from "react";
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
      
      {/* Logout button at the bottom */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </aside>
  );
};

export default Sidebar;
