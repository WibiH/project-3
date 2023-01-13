import React from "react";

const ProfileComponent = ({ user }) => {
  console.log(user);
  return <div className="p-8 m-8">"Profilepicture" Hello "name"</div>;
};

export default ProfileComponent;

/* <img src={user.profilePicture} alt={user.name} />
      <h1> Hello {user.name}</h1>
      */
