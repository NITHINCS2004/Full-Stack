/*import React from "react";
import "../styles/Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My App</h2>
    </nav>
  );
};

export default Navbar;
*//*
import React from "react";
import "../styles/Navbar.css"; // Import CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My App</h2>
    </nav>
  );
};

export default Navbar;
*/
import React from "react";
import "../styles/Navbar.css"; // Import CSS
import { BsList } from "react-icons/bs"; // Menu Icon

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        <BsList size={25} />
      </button>
      <img src="https://tse2.mm.bing.net/th?id=OIP.Zu094Tjw1ZGza4Sgc8NenwHaHa&pid=Api&P=0&h=180" alt="Logo" className="navbar-logo" />
      <h2>About</h2>
    </nav>
  );
};

export default Navbar;
