// Profile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will take the user to the previous page
  };

  return (
    <div className="profile-page">
      <h1>This is the Profile Page</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Profile;
