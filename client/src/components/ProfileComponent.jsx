import React from "react";

const ProfileComponent = ({ user }) => {
  console.log("This is the USER", user);
  return (
    <div>
      <img
        src={user.profilePicture}
        alt={user.name}
        className="rounded-full w-96 h-96"
      />
      <h1> Hello {user.name}</h1>
    </div>
  );
};

export default ProfileComponent;
