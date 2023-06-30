import React from "react";

export default function ProductAddedPopup({ setShowProductAdded }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white lg:p-6 p-4 rounded m-8">
        <h2 className="text-2xl font-bold mb-4">Product Added To Cart!</h2>
        <p className="text-gray-700">Enjoy Shopping.</p>
        <button
          onClick={() => setShowProductAdded(false)}
          className="px-4 py-1 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
