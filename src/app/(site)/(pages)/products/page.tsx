import React from "react";

import { Metadata } from "next";
import ProductList from "@/components/Products";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ProduuctPageList = () => {
  return (
    <main>
      <ProductList />
    </main>
  );
};

export default ProduuctPageList;
