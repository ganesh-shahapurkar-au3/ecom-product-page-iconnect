import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="rounded shadow-sm max-w-max p-3 border">
      <img src={product.image} alt={product.name} className="mb-2 w-80 h-80" />
      <div className="ml-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700 font-semibold">₹{product.price}</p>
        <Link
          to={`/products/${product.id}`}
          className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium  py-1 px-3 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
