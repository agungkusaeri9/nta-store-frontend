import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nta Store | About Us",
  description: "This is Nta Store for NextCommerce Template",
};

const ContactPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default ContactPage;
