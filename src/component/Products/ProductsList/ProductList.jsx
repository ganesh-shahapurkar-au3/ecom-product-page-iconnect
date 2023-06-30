import React from "react";
import productsData from "../../../data/productsData.json";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductList() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold ml-3 mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 justify-items-center">
        {productsData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
