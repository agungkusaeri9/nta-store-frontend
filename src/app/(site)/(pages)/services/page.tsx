import React from "react";

import { Metadata } from "next";
import ServiceList from "@/components/Services/ServiceList";
export const metadata: Metadata = {
    title: "Services Page | Nta Store",
    description: "This is Blog Grid Page for NextCommerce Template",
    // other metadata
};

const BlogListPage = () => {
    return (
        <>
            <ServiceList />
        </>
    );
};

export default BlogListPage;
