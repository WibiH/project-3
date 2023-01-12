import React from "react";

const ProfileComponent = ({ user }) => {
  const { name, profilePicture } = user;
  return (
    <div className="p-8 m-8">
      <img src={profilePicture} alt={name} />
      <h1> Hello {name}</h1>
    </div>
  );
};

export default ProfileComponent;
