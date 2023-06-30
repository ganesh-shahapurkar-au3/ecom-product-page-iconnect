import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 mb-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to={`/`}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-xl font-medium cursor-pointer"
          >
            Ecommerce
          </Link>
        </div>
      </div>
    </nav>
  );
}
