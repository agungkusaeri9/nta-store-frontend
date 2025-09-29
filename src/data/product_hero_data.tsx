// src/data/productHeroData.ts
import { StaticImageData } from "next/image";

export type ProductHeroItem = {
    id: number;
    title: string;
    subtitle?: string;
    discount?: string;   // e.g. "30%"
    badge?: string;      // small text near discount e.g. "Sale\nOff"
    description: string;
    ctaText: string;
    ctaUrl: string;
    image: string | StaticImageData;
    imageAlt: string;
    layout?: "image-left" | "image-right"; // control responsive ordering
};

export const productHeroData: ProductHeroItem[] = [
    {
        id: 1,
        title: "True Wireless Noise Cancelling Headphone",
        subtitle: "Premium sound, comfy fit",
        discount: "30%",
        badge: "Sale\nOff",
        description:
            "Experience crystal clear sound and powerful noise cancellation for immersive listening all day long.",
        ctaText: "Shop Now",
        ctaUrl: "/products/headphone-twc-01",
        image: "/images/hero/hero-01.png",
        imageAlt: "Wireless noise cancelling headphone",
        layout: "image-right",
    },
    {
        id: 2,
        title: "Smart Fitness Watch Series 5",
        subtitle: "Track, train, recover",
        discount: "20%",
        badge: "Limited\nOffer",
        description:
            "All-day health tracking, GPS, and long battery life — the perfect partner for your active lifestyle.",
        ctaText: "Explore Watch",
        ctaUrl: "/products/fitness-watch-5",
        image: "/images/hero/hero-02.png",
        imageAlt: "Smart fitness watch on wrist",
        layout: "image-left",
    },
    {
        id: 3,
        title: "Ultra HD 4K Smart TV 55\"",
        subtitle: "Cinematic experience at home",
        discount: "15%",
        badge: "Hot\nDeal",
        description:
            "Stunning 4K display, low latency, and smart OS — bring movies and games to life with vivid color.",
        ctaText: "View Details",
        ctaUrl: "/products/4k-tv-55",
        image: "/images/hero/hero-03.png",
        imageAlt: "Ultra HD 4K smart TV",
        layout: "image-right",
    },
];

export default productHeroData;
