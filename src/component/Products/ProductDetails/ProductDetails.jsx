import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../../data/productsData.json";
import ProductNotFound from "../ProductNotFound/ProductNotFound";
import ProductAddedPopup from "../ProductAddedPopup/ProductAddedPopup";

export default function ProductDetails() {
  const [showProductAdded, setShowProductAdded] = useState(false);

  const { id } = useParams();

  const product = productsData.find((product) => product.id === parseInt(id));

  const handleAddToCartBtn = () => {
    setShowProductAdded(true);
    setTimeout(() => {
      setShowProductAdded(false);
    }, 3000);
  };

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="container mx-auto">
      {showProductAdded && (
        <ProductAddedPopup setShowProductAdded={setShowProductAdded} />
      )}
      <h2 className="text-2xl font-bold mb-4 ml-3">Product Details</h2>
      <div className="bg-white rounded shadow p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 py-8 max-w-screen-lg">
          <div className="justify-self-center">
            <img src={product.image} alt={product.name} className="w-96 h-96" />
          </div>
          <div className="mx-4">
            <h3 className="text-5xl font-semibold my-8">{product.name}</h3>
            <p className="text-gray-700 text-3xl font-bold my-8">
              ₹ {product.price}
            </p>
            <p className="text-gray-700 my-8 text-lg font-medium">
              Quantity: {product.quantity}
            </p>
            <button
              className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-24 rounded"
              onClick={handleAddToCartBtn}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
