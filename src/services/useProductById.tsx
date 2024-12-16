import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: string;
    rating: number;
    sku: string;
    shippingInformation: string;
    returnPolicy: string;
    discountPercentage: number;
};

export const fetchProductById = async (productId: string): Promise<Product> => {
    const url = `https://dummyjson.com/products/${productId}`;
    const { data } = await axios.get(url);
    console.log(data, "data");
    return data as Product;
};

export const useProductById = (productId: string) => {
    return useQuery<Product, Error>({
        queryKey: ["product", productId],
        queryFn: () => fetchProductById(productId),
    });
};