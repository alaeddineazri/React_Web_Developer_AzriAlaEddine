// CustomCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Rating } from '@fluentui/react-rating';

type CustomCardProps = {
    title?: string;
    price?: number;
    thumbnail?: string;
    isLoading: boolean;
    category?: string;
    rating?: number;
};

const CustomCard = ({ title, price, thumbnail, isLoading, category, rating }: CustomCardProps) => {
    return (
        <Card
            className="bg-gray-50 shadow-lg rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        >
            <CardHeader>
                {isLoading ? (
                    <>
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                    </>
                ) : (
                    <div className="flex flex-col items-center">
                        <CardTitle className="text-center mb-2">{title}</CardTitle>
                    </div>
                )}
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <Skeleton className="w-full h-48 rounded-lg" />
                ) : (
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-auto object-cover object-center rounded-lg"
                    />
                )}
            </CardContent>
            <CardFooter>
                {isLoading ? (
                    <div className="flex justify-between items-center w-full">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                ) : (
                    <div className="flex justify-around items-center w-full">
                        <span className="text-neutral-900 font-bold">{category}</span>
                        <Rating step={1} defaultValue={rating} size="medium" />
                        <span className="text-gray-500 font-bold">${price}</span>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default CustomCard;
