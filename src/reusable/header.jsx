import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-300 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>{/* Removed the "My Website" text */}</div>
        <div className="flex justify-center w-full h-full text-center mt-4">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/areas"
              className="text-gray-900 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Áreas de atuação
            </Link>
            <Link
              to="/contatos"
              className="text-gray-900 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contatos
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 mt-4">
          <a
            href="https://www.linkedin.com/in/c%C3%A1tia-teixeira-gomes-a08743145/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Linkedin-512.png"
              alt="Linkedin"
              className="h-8 w-8 mr-2"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
