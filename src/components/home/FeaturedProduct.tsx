import ProductCard from "./Card/ProductCard";

const FeaturedProducts = () => {
    const products = [
        {
            name: "Fresh Hilsa Fish",
            description: "Premium quality, fresh catch from the ocean.",
            price: 25.99,
            image: "/hilsha.webp", // Place this image in /public folder
            alt: "Fresh Hilsa Fish",
            link: "/hilsha.jpg",
        },
        {
            name: "Frozen Salmon",
            description: "Freshly frozen, high-quality salmon fish ",
            price: 18.99,
            image: "/fresh-fish.jpg",
            alt: "Frozen Salmon",
            link: "/fresh-fish.jpg",
        },
        {
            name: "Shrimp Pack",
            description: "Sweet and tender shrimp, frozen and ready to cook.",
            price: 15.49,
            image: "/carp.jpg",
            alt: "Shrimp Pack",
            link: "/carp.jpg",
        },
        {
            name: "Tuna Steak",
            description: "Fresh cut tuna steaks, perfect for grilling.",
            price: 22.75,
            image: "/tona.jpg",
            alt: "Tuna Steak",
            link: "/tona.jpg",
        },
    ];

    return (
        <section className="py-12 px-4 bg-[#052F35]">
            <div className="flex justify-center items-center gap-1">
                <p className="h-1 w-10 bg-[#119d3e] rounded-2xl"></p>

                <p className="text-md  text-center items-center text-[#119d3e]  px-2">
                     HEALTHY FISH 
                </p>
                <p className="h-1 w-10 rounded-2xl bg-[#119d3e]"></p>
            </div>
            <h2 className="text-4xl font-bold text-center text-White mb-8 px-2 mt-2">
                    Featured Products
                </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;