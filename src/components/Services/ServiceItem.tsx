"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import configData from "@/data/config_data";

export type ServiceType = {
  title: string;
  slug: string;
  image: string;
  short: string;
  description: string;
  features?: string[];
  icon?: string;
  ctaText?: string;
  ctaUrl?: string;
  startingPrice?: string;
};

type Props = {
  service: ServiceType;
  className?: string;
  ownerPhone?: string; // optional override
};

export default function ServiceItem({ service, className = "", ownerPhone }: Props) {
  const {
    title,
    slug,
    image,
    short,
    description,
    features = [],
    ctaText,
    ctaUrl,
    startingPrice,
  } = service;

  const WA_NUMBER =
    (ownerPhone && ownerPhone.trim()) ||
    (configData && configData.whatsapp_number) ||
    process.env.NEXT_PUBLIC_OWNER_WHATSAPP ||
    "";

  const digitsOnly = (s: string) => (s || "").replace(/\D/g, "");

  const buildMessage = useCallback(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const serviceUrl = `${origin}/services/${slug}`;
    const lines = [
      `Halo, saya tertarik dengan layanan *${title}*`,
      startingPrice ? `Starting: ${startingPrice}` : null,
      `Link: ${serviceUrl}`,
      "",
      "Mohon informasinya terkait estimasi & scope. Terima kasih!",
    ];
    return lines.filter(Boolean).join("\n");
  }, [slug, title, startingPrice]);

  const handleWhatsAppClick = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      try {
        const phone = digitsOnly(WA_NUMBER);
        if (!phone) {
          window.alert(
            "Nomor WhatsApp tujuan belum diatur. Isi config_data.whatsapp_number atau NEXT_PUBLIC_OWNER_WHATSAPP."
          );
          return;
        }
        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(buildMessage())}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.error("WA redirect error:", err);
        window.alert("Gagal membuka WhatsApp. Cek console.");
      }
    },
    [WA_NUMBER, buildMessage]
  );

  return (
    <article
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full ${className}`}
      aria-roledescription="service card"
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44">
        <Image
          src={image ?? "/images/services/placeholder.png"}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Content (flex-1 supaya footer nempel bawah) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{short}</p>

          <p className="text-sm text-gray-700 mb-3 line-clamp-3">{description}</p>

          {features.length > 0 && (
            <ul className="mb-4 flex flex-col gap-2">
              {features.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                    ✓
                  </span>
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer area (push to bottom) */}
        <div className="mt-auto">
          <div className="flex items-center justify-between gap-3 mb-3">
            <Link
              href={ctaUrl ?? `/services/${slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700"
              aria-label={`Learn more about ${title}`}
            >
              {ctaText ?? "Learn more"}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M5 12h14M13 5l6 7-6 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div className="text-right">
              <span className="block text-xs text-gray-500">Starting</span>
              <span className="block text-sm font-semibold text-gray-800">
                {startingPrice ?? "Contact"}
              </span>
            </div>
          </div>

          {/* WA button placed at the very bottom of the card */}
          <div>
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-green text-white px-3 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label="Chat via WhatsApp"
              title="Chat via WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block">
                <path d="M21 11.5a8.38 8.38 0 01-1.68 4.9l.01.01-1.24 4.55-4.68-1.22a8.11 8.11 0 01-4.16 1.18C5.92 21.92 2 18 2 12.96 2 7.92 6.48 4 11.52 4 16.56 4 21 7.92 21 11.5z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                <path d="M16.5 13.2c-.27-.14-1.6-.79-1.85-.88-.25-.08-.43-.12-.62.14-.19.26-.74.87-.9 1.05-.16.18-.34.2-.61.07-.27-.13-1.14-.42-2.17-1.34-.8-.73-1.34-1.64-1.5-1.9-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.17-.27.26-.45.09-.19.04-.34-.02-.48-.06-.14-.62-1.5-.85-2.07-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.97.98-.97 2.38 0 1.4 1 2.75 1.14 2.94.14.19 1.96 3.17 4.75 4.32 2.79 1.16 2.79.77 3.29.72.5-.05 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.27-.07-.11-.26-.17-.53-.31z" fill="#fff" />
              </svg>
              Chat via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
