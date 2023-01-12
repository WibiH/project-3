import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authentication";

const Navbar = () => {
  const { user, setUser, eraseToken } = useAuthContext();

  const handleSignOut = () => {
    setUser(null);
    eraseToken();
  };
  return (
    <nav className="w-full bg-gray-100">
      <ul className="flex flex-col p-4 md:flex-row">
        <li className="pr-3 text-blue-600">
          <Link to="/home">Go back to the home page</Link>
        </li>
        <li className="pr-3">
          <Link to="/events">All Events</Link>
        </li>
        <li className="pr-3">
          <Link to="/tour">Tour</Link>
        </li>
        <li className="pr-3">
          <Link to="/events/create">Create Events</Link>
        </li>
        <li className="pr-3">
          <Link to="/events/:id/edit">Edit Events</Link>
        </li>
        <li className="pr-3">
          <Link to="/events/:id">Single Events</Link>
        </li>
        {(user && (
          <>
            <li className="pr-3">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="pr-3">
              <span>{user.name}</span>{" "}
            </li>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        )) || (
          <>
            <li className="pr-3">
              <Link to="/login">Log In</Link>
            </li>
            <li className="pr-3">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
