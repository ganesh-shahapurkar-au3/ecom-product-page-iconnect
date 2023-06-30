import React from "react";

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Product Not Found</h1>
      <p className="text-xl text-gray-600">
        Oops! The product you are looking for does not exist.
      </p>
    </div>
  );
}
