import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

type ProductCarouselProps = {
    images: string[];
    isLoading: boolean;
};
const ProductCarousel: React.FC<ProductCarouselProps> = (
    { images, isLoading }: ProductCarouselProps
) => {
    return (
        <Carousel
            opts={{
                loop: true,
                duration: 50,
            }}
        >
            <CarouselContent >
                {
                    isLoading ? (
                        <CarouselItem>
                            <Skeleton className="w-full h-96 rounded-3xl bg-slate-400" />
                        </CarouselItem>
                    ) : (
                        images.map((image, index) => (
                            <CarouselItem key={index}>
                                <img
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    className="w-full h-auto rounded-3xl"
                                />
                            </CarouselItem>
                        ))
                    )
                }
            </CarouselContent>
            {
                images.length > 1 && (
                    <>
                        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" />
                        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" />
                    </>
                )
            }
        </Carousel>
    );
};

export default ProductCarousel;
