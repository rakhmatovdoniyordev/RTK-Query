import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 mt-8 mb-14">
      <div className="container__person">
        <div className="flex flex-wrap justify-between items-center mt-24">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h2>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500 transition duration-150 ease-in-out">
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out">
                <FaFacebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-pink-600 transition duration-150 ease-in-out">
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                <FaGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 mr-4 transition duration-150 ease-in-out">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer