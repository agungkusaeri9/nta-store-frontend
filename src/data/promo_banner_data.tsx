export type PromoBannerItem = {
    id: number;
    variant: "big" | "small-left" | "small-right";
    title: string;
    subtitle?: string;
    heading?: string;      // big heading like "UP TO 30% OFF"
    discount?: string;     // "UP TO 30% OFF" or "Flat 20% off"
    description?: string;
    ctaText: string;
    ctaUrl: string;
    image: string;
    imageAlt?: string;
    bgColor?: string;      // tailwind-style hex or class (for reference)
    imageClass?: string;   // extra classes to position image absolutely
    textAlign?: "left" | "right";
};

export const promoBannerData: PromoBannerItem[] = [
    {
        id: 1,
        variant: "big",
        title: "Apple iPhone 14 Plus",
        subtitle: undefined,
        heading: "UP TO 30% OFF",
        discount: "UP TO 30% OFF",
        description:
            "iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro, A15 Bionic, with a 5-core GPU, powers all the latest features.",
        ctaText: "Buy Now",
        ctaUrl: "/collections/phones/products/iphone-14-plus",
        image: "/images/promo/promo-01.png",
        imageAlt: "iPhone 14 Plus",
        bgColor: "#F5F5F7",
        // used in JSX as className for absolute positioning (matches your markup)
        imageClass: "absolute bottom-0 right-4 lg:right-26 -z-1",
        textAlign: "left",
    },
    {
        id: 2,
        variant: "small-left",
        title: "Foldable Motorised Treadmill",
        subtitle: "Workout At Home",
        heading: undefined,
        discount: "Flat 20% off",
        description: undefined,
        ctaText: "Grab Now",
        ctaUrl: "/collections/fitness/products/foldable-treadmill",
        image: "/images/promo/promo-02.png",
        imageAlt: "Foldable treadmill",
        bgColor: "#DBF4F3",
        imageClass: "absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1",
        textAlign: "right",
    },
    {
        id: 3,
        variant: "small-right",
        title: "Apple Watch Ultra",
        subtitle: undefined,
        heading: "Up to 40% off",
        discount: "40%",
        description:
            "The aerospace-grade titanium case strikes the perfect balance of everything.",
        ctaText: "Buy Now",
        ctaUrl: "/collections/watches/products/apple-watch-ultra",
        image: "/images/promo/promo-03.png",
        imageAlt: "Apple Watch Ultra",
        bgColor: "#FFECE1",
        imageClass: "absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1",
        textAlign: "left",
    },
];

export default promoBannerData;
