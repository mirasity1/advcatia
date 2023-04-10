import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="h-20 bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>{/* Removed the "My Website" text */}</div>
        <div className="flex justify-center w-full h-full mt-4 text-center">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-800"
            >
              Inicio
            </Link>
            <Link
              to="/areas-de-atuacao"
              className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-800"
            >
              Áreas de atuação
            </Link>
            <Link
              to="/contatos"
              className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-800"
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
              className="w-8 h-8 mr-2"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
