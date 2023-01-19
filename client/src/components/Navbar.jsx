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
    <nav className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <ul className="flex flex-col p-4 md:flex-row">
        <div className="ml-auto flex flex-col mx-auto md:flex-row">
          <li className="pr-3 text-white hover:underline underline-offset-8">
            <Link to="/home">Home</Link>
          </li>
          <li className="pr-3 hover:underline underline-offset-8">
            <Link to="/events">All Events</Link>
          </li>
          <li className="pr-3 hover:underline underline-offset-8">
            <Link to="/tour">Tour</Link>
          </li>
        </div>
        {(user && (
          <div className="ml-auto flex flex-col mx-auto md:flex-row">
            <li className="pr-3 hover:underline underline-offset-8">
              <Link to="/events/create">Create Events</Link>
            </li>
            <li className="pr-3 hover:underline underline-offset-8">
              <Link to={`/profile/${user._id}`}>{user.name}´s Profile</Link>
            </li>
            <button
              onClick={handleSignOut}
              className="pr-3 hover:underline underline-offset-8"
            >
              Sign Out
            </button>
          </div>
        )) || (
          <div className="ml-auto flex flex-col mx-auto md:flex-row">
            <li className="pr-3 hover:underline underline-offset-8">
              <Link to="/login">Log In</Link>
            </li>
            <li className="pr-3 hover:underline underline-offset-8">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
