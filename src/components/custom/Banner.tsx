import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type BannerItem = {
    id: number;
    image: string;
    title: string;
    description: string;
};

const bannerData: BannerItem[] = [
    {
        id: 1,
        image: "/src/assets/banner1.png",
        title: "Discover the Latest Trends",
        description: "Explore a curated selection of the newest and best products just for you.",
    },
    {
        id: 2,
        image: "/src/assets/banner2.png",
        title: "Your Next Favorite Product",
        description: "Find the products that suit your style and needs perfectly.",
    },
    {
        id: 3,
        image: "/src/assets/banner3.png",
        title: "Top Deals and Offers",
        description: "Enjoy amazing discounts and exclusive deals on top-quality items.",
    },
    {
        id: 4,
        image: "/src/assets/banner4.png",
        title: "Explore Categories",
        description: "Browse through a wide variety of categories to find exactly what you need.",
    },
];

const Banner: React.FC = () => {
    return (
        <Carousel
            opts={{
                loop: true,
                duration: 50,
            }}
        >
            <CarouselContent className="h-96 rounded-3xl">
                {bannerData.map((banner) => (
                    <CarouselItem key={banner.id} className="h-full">
                        <div
                            className="flex items-center justify-end bg-cover bg-center rounded-3xl shadow-lg h-96"
                            style={{ backgroundImage: `url('${banner.image}')` }}
                        >
                            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto md:h-44 mx-4 md:mx-32 text-center md:text-left bg-white bg-opacity-90 p-4 md:p-6 rounded-3xl shadow-lg flex flex-col justify-start">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{banner.title}</h1>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{banner.description}</p>
                            </div>
                        </div>

                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
        </Carousel>
    );
};

export default Banner;
