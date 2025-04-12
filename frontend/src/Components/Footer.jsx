import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">VisiTracks</h2>
              <p className="text-gray-300">Track your visitors with ease</p>
            </div>
            <div className="text-center md:text-right">
              <p>© {new Date().getFullYear()} VisiTracks. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;