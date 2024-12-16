import React from "react";
import { useLoaderData } from "@tanstack/react-router";
import { useProductById } from "@/services/useProductById";
import { Rating } from '@fluentui/react-rating';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/custom/ProductCarousel";
import ProductAccordion from "@/components/custom/ProductAccordion";

const ProductDetailPage: React.FC = () => {
    const { productId } = useLoaderData({ from: "/products/$productId" });
    const { data, isLoading, isError } = useProductById(productId);

    if (isLoading) return <div className="text-center mt-10 text-xl">Loading...</div>;
    if (isError || !data)
        return <div className="text-center mt-10 text-red-500">Error loading product data.</div>;

    const { title, price, description, images, category, rating, sku, shippingInformation, returnPolicy, discountPercentage } = data;

    const accordionItems = [
        {
            label: "Description",
            value: "description",
            icon: <MdOutlineRemoveRedEye />,
            content: description,
        },
        {
            label: "Return Policy",
            value: "returnPolicy",
            icon: <TbTruckReturn />,
            content: returnPolicy,
        },
        {
            label: "Shipping Information",
            value: "shippingInformation",
            icon: <FaShippingFast />,
            content: shippingInformation,
        },
    ];

    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-6 md:mt-10">
                <div className="w-full sm:w-1/2">
                    {isLoading ? (
                        <div className="w-full h-96 bg-gray-200 rounded-3xl" />
                    ) : (
                        <ProductCarousel images={images} isLoading={false} />
                    )}
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="flex items-start justify-between mb-4 ">
                        <p className="text-3xl font-bold ">{title}</p>
                        <p className="text-xl font-semibold flex gap-4 ">
                            <span className="line-through text-gray-500">${price}</span> <span className="text-green-700" >${discountedPrice}</span> 
                        </p>
                    </div>
                    <p className="text-gray-700">sku : {sku}</p>
                    <p className="text-gray-700">Category : {category}</p>
                    <ProductAccordion items={accordionItems} />
                    <div className="mt-6">
                        <Rating step={0.5} defaultValue={rating} size="medium" />
                    </div>
                    <div className="mt-8 flex gap-4">
                        <Button className="px-6 py-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition">
                            Add to Cart
                        </Button>
                        <Button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-700 transition">
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
