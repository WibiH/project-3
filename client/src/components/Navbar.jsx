import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col p-4 md:flex-row">
        <li className="pr-3 text-blue-600">
          <Link to="/">Go back to the home page</Link>
        </li>
        <li className="pr-3">
          <Link to="/events">All Events</Link>
        </li>
        <li className="pr-3">
          <Link to="/tour">Tour</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
