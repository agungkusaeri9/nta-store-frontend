import React from "react";

import { Metadata } from "next";
import BlogList from "@/components/Blog/BlogList";
export const metadata: Metadata = {
    title: "Blog Grid Page | NextCommerce Nextjs E-commerce template",
    description: "This is Blog Grid Page for NextCommerce Template",
    // other metadata
};

const BlogListPage = () => {
    return (
        <>
            <BlogList />
        </>
    );
};

export default BlogListPage;
