import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async ({
  page,
  pageSize,
  searchTerm,
  category,
  sortBy,
  order,
}: {
  page: number;
  pageSize: number;
  searchTerm?: string;
  category?: string;
  sortBy?: string;
  order?: string;
}) => {
  const skip = (page - 1) * pageSize;
  let url = "";

  if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=${pageSize}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
  } else {
    url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${pageSize}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
  }

  const { data } = await axios.get<{ products: any[]; total: number }>(url);
  return data;
};

export const useProducts = (
  page: number,
  pageSize: number,
  searchTerm?: string,
  category?: string,
  sortBy?: string,
  order?: string
) => {
  return useQuery({
    queryKey: ["products", page, pageSize, searchTerm, category, sortBy, order],
    queryFn: () =>
      fetchProducts({
        page,
        pageSize,
        searchTerm,
        category,
        sortBy,
        order,
      }),
  });
};
