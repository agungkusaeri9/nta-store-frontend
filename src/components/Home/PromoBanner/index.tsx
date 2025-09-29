"use client";

import React from "react";
import Image from "next/image";
import promoBannerData from "@/data/promo_banner_data";

export default function PromoBanner() {
  const big = promoBannerData.find((p) => p.variant === "big");
  const smalls = promoBannerData.filter((p) => p.variant !== "big");

  if (!big) return null;

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* big banner */}
        <div
          className="relative z-1 overflow-hidden rounded-lg py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5"
          style={{ background: big.bgColor }}
        >
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              {big.title}
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              {big.heading ?? big.discount}
            </h2>

            {big.description && <p>{big.description}</p>}

            <a
              href={big.ctaUrl}
              aria-label={big.ctaText}
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              {big.ctaText}
            </a>
          </div>

          {/* image absolute */}
          <div className={big.imageClass ?? "absolute bottom-0 right-4 -z-1"}>
            <Image
              src={big.image}
              alt={big.imageAlt ?? "promo image"}
              width={274}
              height={350}
              priority={true}
            />
          </div>
        </div>

        {/* small banners */}
        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {smalls.map((item) => (
            <div
              key={item.id}
              className="relative z-1 overflow-hidden rounded-lg py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10"
              style={{ background: item.bgColor }}
            >
              {/* image absolute */}
              <div className={item.imageClass ?? "absolute top-1/2 -translate-y-1/2 right-3 -z-1"}>
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? "promo image"}
                  width={item.variant === "small-left" ? 241 : 200}
                  height={item.variant === "small-left" ? 241 : 200}
                />
              </div>

              <div className={item.textAlign === "right" ? "text-right" : ""}>
                <span className="block text-lg text-dark mb-1.5">
                  {item.title}
                </span>

                {item.subtitle && (
                  <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                    {item.subtitle}
                  </h2>
                )}

                {item.heading && item.variant !== "big" ? (
                  <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                    {item.heading}
                  </h2>
                ) : null}

                {item.discount && (
                  <p className="font-semibold text-custom-1 text-teal">
                    {item.discount}
                  </p>
                )}

                {item.description && (
                  <p className="max-w-[285px] text-custom-sm mt-2">
                    {item.description}
                  </p>
                )}

                <a
                  href={item.ctaUrl}
                  aria-label={item.ctaText}
                  className={`inline-flex font-medium text-custom-sm text-white py-2.5 px-8.5 rounded-md ease-out duration-200 mt-9 ${item.variant === "small-left"
                    ? "bg-teal hover:bg-teal-dark"
                    : "bg-orange hover:bg-orange-dark"
                    }`}
                >
                  {item.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
