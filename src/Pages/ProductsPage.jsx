import React, { useState } from "react";
import products from "../data";
import Objcard from "../Components/Objcard";
import Banner from "../Components/Banner";
import salePoster from "../assets/offerbanner.png";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { name: "All", value: "all" },
    { name: "Body Kits", value: "body-kits" },
    { name: "Engine Parts", value: "engine-parts" },
    { name: "Brakes", value: "brakes" },
    { name: "Suspension", value: "suspension" },
    { name: "Wheels", value: "wheels" },
    { name: "Lighting", value: "lighting" },
    { name: "Exhaust", value: "exhaust" },
    { name: "Electrical", value: "electrical" },
    { name: "Interior", value: "interior" },
    { name: "Exterior", value: "exterior" },
    { name: "Accessories", value: "accessories" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.type === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <Banner />

      {/* Page Heading */}
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Auto Parts Store
        </h1>

        <p className="mt-2 text-gray-500">
          Find the perfect parts and accessories for your vehicle
        </p>
      </div>

      {/* Categories */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`rounded-full px-5 py-2 font-medium transition-all ${
              selectedCategory === category.value
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Results Heading */}
      <div className="mt-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedCategory === "all"
            ? "All Auto Parts"
            : categories.find(
                (category) => category.value === selectedCategory
              )?.name}
        </h2>

        <span className="text-sm text-gray-500">
          {filteredProducts.length} Products
        </span>
      </div>

      {/* Products + Poster */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {filteredProducts.map((item, index) => (
          <React.Fragment key={item.id}>

            {/* Product Card */}
            <Objcard
              obj={item}
              onClick={() => setSelectedProduct(item)}
            />

            {/* Poster after every 8 cards */}
            {index == 7 && (
              <div className="col-span-full my-4 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={salePoster}
                  alt="Special Sale Offer"
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

          </React.Fragment>
        ))}

      </div>

      {/* No Products */}
      {filteredProducts.length === 0 && (
        <div className="py-16 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No products found
          </h3>

          <p className="mt-2 text-gray-500">
            Try selecting another category.
          </p>
        </div>
      )}

    </div>
  );
};

export default ProductsPage;