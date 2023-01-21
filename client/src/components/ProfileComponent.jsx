import React from "react";

const ProfileComponent = ({ user }) => {
  console.log("This is the USER", user);
  return (
    <div className="flex items-center justify-center space-x-4 my-6">
      <img
<<<<<<< HEAD
        className="w-10 h-10 rounded"
        src={user.profilePicture}
=======
        className="w-10 h-10 rounded-full"
        src={
          user.profilePicture ||
          "https://cdn-icons-png.flaticon.com/512/1251/1251840.png"
        }
>>>>>>> a8d7917372e3ed5389a2f42c68278097bb4cbb1e
        alt={user.name}
      />
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
        <h1>Hello {user.name}</h1>
      </div>
    </div>
  );
};

export default ProfileComponent;
