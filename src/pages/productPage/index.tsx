import React, { useState } from "react";
import { useProducts } from "@/services/useProducts";
import CustomCard from "@/components/custom/CustomCard";
import CustomPagination from "@/components/custom/CustomPagination";
import Banner from "@/components/custom/Banner";
import { Link } from '@tanstack/react-router';
import categories from "@/helper/data";

const ProductPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState("asc");

  const pageSize = 9;

  const { data, isLoading, isError } = useProducts(
    currentPage,
    pageSize,
    searchTerm,
    selectedCategory,
    sortBy,
    order
  );

  const products = data?.products || [];
  const totalPages = Math.ceil((data?.total || 0) / pageSize);

  return (
    <div className="container mx-auto p-4 bg-white">
      <Banner />
      <div className="flex flex-wrap gap-4 my-5">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg p-2 w-full sm:w-1/3"
        />
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg p-2 w-full sm:w-1/4"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.replace("-", " ")}
            </option>
          ))}
        </select>
        <div className="flex gap-4">
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg p-2"
          >
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="title">Title</option>
          </select>
          <select
            value={order}
            onChange={(e) => {
              setOrder(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg p-2"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-5">
        {isLoading
          ? Array.from({ length: pageSize }).map((_, index) => (
              <CustomCard key={index} isLoading={true} />
            ))
          : products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <CustomCard
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
                category={product.category}
                rating={product.rating}
                isLoading={false}
              />
            </Link>
            ))}
      </div>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {isError && (
        <div className="text-center text-red-500 mt-10">
          Failed to fetch products.
        </div>
      )}
    </div>
  );
};

export default ProductPage;
