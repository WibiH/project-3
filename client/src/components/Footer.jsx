import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          to="https://qhm-app.netlify.app/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="https://www.queerhistory.de/wp-content/uploads/2021/08/qhm-logo-footer.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 ">
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-white sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center">
        ©{" "}
        <Link to="https://qhm-app.netlify.app/" className="hover:underline">
          QueerHistoryMonth
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
export default Footer;
