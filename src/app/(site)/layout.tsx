"use client";
import { useState, useEffect } from "react";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <Toaster
              position="bottom-right"
              reverseOrder={false}
              gutter={12}
              containerClassName="!z-[9999]" // z-index paling tinggi
              toastOptions={{
                duration: 4000,
                style: {
                  background: "#1E293B", // slate-800
                  color: "#F1F5F9", // slate-100
                  borderRadius: "0.75rem", // rounded-xl
                  padding: "12px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)", // shadow lembut
                },
                success: {
                  duration: 3000,
                  style: {
                    background: "#16A34A", // hijau
                    color: "#fff",
                  },
                  iconTheme: {
                    primary: "#fff",
                    secondary: "#16A34A",
                  },
                },
                error: {
                  duration: 4000,
                  style: {
                    background: "#DC2626", // merah
                    color: "#fff",
                  },
                  iconTheme: {
                    primary: "#fff",
                    secondary: "#DC2626",
                  },
                },
              }}
            />

            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <Header />
                    {children}

                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
