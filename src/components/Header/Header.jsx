import React from "react";
import { FaHome, FaPlusCircle, FaSignOutAlt, FaTwitter } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <header className="bg-white shadow-md">
      <div className="container__person">
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <NavLink to={"/home"} className="flex-shrink-0">
                  <FaTwitter
                    className="h-8 w-8 text-blue-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </NavLink>
              </div>
              <div className="flex items-center">
                <NavLink
                  to={"/home"}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition duration-150 ease-in-out flex items-center"
                >
                  <FaHome
                    className="h-5 w-5 inline-block mr-1"
                    aria-hidden="true"
                  />
                  Home
                </NavLink>
                <NavLink
                  to={"/add-tweet"}
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition duration-150 ease-in-out flex items-center"
                >
                  <FaPlusCircle
                    className="h-5 w-5 inline-block mr-1"
                    aria-hidden="true"
                  />
                  Add Tweet
                </NavLink>
              </div>
              <div className="flex items-center">
                <button
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-red-100 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  onClick={handleLogOut}
                >
                  <FaSignOutAlt
                    className="h-5 w-5 inline-block mr-1"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
