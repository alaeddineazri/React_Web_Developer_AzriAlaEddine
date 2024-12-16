import React from "react";
import { Link } from "@tanstack/react-router";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Product App</h1>
      <p className="mb-6">Explore a variety of products fetched from the DummyJSON API.</p>
      <Link
        to="/products"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Go to Product Page
      </Link>
    </div>
  );
};

export default HomePage;