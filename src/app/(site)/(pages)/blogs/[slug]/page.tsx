// app/blog/[slug]/page.tsx
"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import BlogDetail from "@/components/Blog/BlogDetail";
import blogData from "@/data/blog_data";

export default function BlogPageClient() {
    const params = useParams();
    const slug = params?.slug as string | undefined;

    const [blog, setBlog] = React.useState<typeof blogData[number] | null | undefined>(undefined);

    React.useEffect(() => {
        if (!slug) {
            setBlog(null);
            return;
        }

        const found = blogData.find((b) => b.slug === slug) ?? null;
        setBlog(found);
    }, [slug]);

    // loading state while slug resolves (rare, but safe)
    if (typeof blog === "undefined") {
        return (
            <main className="min-h-[60vh] flex items-center justify-center">
                <p>Loading…</p>
            </main>
        );
    }


    // found — render detail
    return (
        <main>
            <BlogDetail blog={blog} />
        </main>
    );
}
