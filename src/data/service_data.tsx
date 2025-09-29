// src/data/serviceData.ts
export type ServiceItem = {
    id: number;
    title: string;
    slug: string;
    short: string;            // tagline singkat
    description: string;      // penjelasan detail (1-2 kalimat)
    features?: string[];      // poin fitur / deliverables
    image: string;           // optional path to hero image
    icon?: string;            // optional icon path / classname
    ctaText?: string;
    ctaUrl?: string;
    startingPrice?: string;   // e.g. "Mulai dari Rp X" or "Contact"
};

export const serviceData: ServiceItem[] = [
    {
        id: 1,
        title: "Web Application Development",
        slug: "web-application-development",
        short: "Custom web apps dengan arsitektur jelas",
        description:
            "Bikin web app yang scalable & maintainable — API-first, SSR/CSR where needed, dan best practice testing.",
        features: [
            "Backend API (REST/GraphQL)",
            "Frontend React/Next.js dengan TypeScript",
            "Unit & integration tests",
            "CI/CD & deployment"
        ],
        image: "/images/blog/blog-01.jpg",
        icon: "icon-web",
        ctaText: "Konsultasi Web App",
        ctaUrl: "/contact?service=web",
        startingPrice: "Contact"
    },
    {
        id: 2,
        title: "Mobile App (React Native)",
        slug: "mobile-app-react-native",
        short: "Cross-platform apps cepat rilis",
        description:
            "Aplikasi iOS & Android berbasis React Native, fokus pada performa & UX native feel.",
        features: [
            "Single codebase (Android + iOS)",
            "Integrasi push & local storage",
            "Deployment ke App Store & Play Store",
            "Auto-updates / OTA"
        ],
        image: "/images/blog/blog-02.jpg",
        icon: "icon-mobile",
        ctaText: "Buat App Sekarang",
        ctaUrl: "/contact?service=mobile",
        startingPrice: "Contact"
    },
    {
        id: 3,
        title: "E-commerce & Online Store",
        slug: "ecommerce-online-store",
        short: "Toko online lengkap: katalog, checkout, & payment",
        description:
            "Bangun toko online end-to-end: product management, cart, payment gateway (QRIS/DANA/PSP), dan order dashboard.",
        features: [
            "Integrasi payment gateway (PSP / DANA)",
            "Checkout multi-method (WA / payment link)",
            "Admin dashboard & order management",
            "Analytics & conversion tracking"
        ],
        image: "/images/blog/blog-03.jpg",
        icon: "icon-store",
        ctaText: "Buat Toko Online",
        ctaUrl: "/contact?service=ecommerce",
        startingPrice: "Mulai dari Rp 25.000.000"
    },
];

export default serviceData;
