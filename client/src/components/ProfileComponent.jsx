import React from "react";

const ProfileComponent = ({ user }) => {
  console.log("This is the USER", user);
  return (
    <div class="flex items-center justify-center space-x-4 my-6">
      <img
        className="w-10 h-10 rounded-full"
        src={user.profilePicture}
        alt={user.name}
      />
      <div class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
        <h1>Hello {user.name}</h1>
      </div>
    </div>
  );
};

export default ProfileComponent;
