// src/data/productHeroDataRight.ts
export type ProductHeroItem = {
    id: number;
    title: string;
    slug: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
    price?: number;     // optional numeric price (use formatter in UI)
    oldPrice?: number;  // optional numeric old price
    image: string;      // path ke public/images (tidak diubah)
    imageAlt?: string;
    layout?: "image-left" | "image-right" | "center";
};

const productHeroDataRight: ProductHeroItem[] = [
    {
        id: 1,
        title: "True Wireless Noise Cancelling Headphone",
        slug: "True-Wireless-Noise-Cancelling-Headphone",
        subtitle: "Premium sound, comfy fit",
        description:
            "Experience crystal clear sound and powerful noise cancellation for immersive listening all day long.",
        ctaText: "Shop Now",
        ctaUrl: "/products/headphone-twc-01",
        price: 699,
        oldPrice: 999,
        image: "/images/hero/hero-01.png",
        imageAlt: "Wireless noise cancelling headphone",
        layout: "image-right",
    },
    {
        id: 2,
        title: "Smart Fitness Watch Series 5",
        slug: "Smart-Fitness-Watch-Series-5",
        subtitle: "Track, train, recover",
        description:
            "All-day health tracking, GPS, and long battery life — the perfect partner for your active lifestyle.",
        ctaText: "Explore Watch",
        ctaUrl: "/products/fitness-watch-5",
        price: 249,
        oldPrice: 299,
        image: "/images/hero/hero-02.png",
        imageAlt: "Smart fitness watch on wrist",
        layout: "image-left",
    },
];

export default productHeroDataRight;
