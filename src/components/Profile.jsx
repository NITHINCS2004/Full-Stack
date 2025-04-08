// Profile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";

const Profile = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="profile-page">
      <h1>This is the Profile Page</h1>
      <button onClick={goBack}>Go Back</button>

      <h2>AI-Powered Personal Productivity Tracker</h2>
      <Chatbot />
    </div>
  );
};

export default Profile;
