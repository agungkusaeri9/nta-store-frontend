// components/WarningAlert.tsx
"use client";
import React from "react";

type Props = {
    title?: string;
    message: string;
    showIcon?: boolean;
    ctaText?: string;
    ctaHref?: string;
    onClose?: () => void;
    className?: string;
};

export default function WarningAlert({
    title = "Perhatian!",
    message,
    showIcon = true,
    ctaText,
    ctaHref,
    onClose,
    className = "",
}: Props) {
    return (
        <div
            role="alert"
            aria-live="polite"
            className={`relative overflow-hidden rounded-md ${className}`}
        >
            {/* Decorative warning background (SVG stripes + soft fade) */}
            <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full -z-10 opacity-10"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0" stopColor="#FFFBEB" />
                        <stop offset="1" stopColor="#FFF7ED" />
                    </linearGradient>
                    <pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
                        <rect width="10" height="20" fill="#FDE68A" />
                        <rect x="10" width="10" height="20" fill="#FDE68A" opacity="0.6" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#g)" />
                <rect width="100%" height="100%" fill="url(#p)" />
            </svg>

            {/* subtle overlay to ensure text contrast */}
            <div className="absolute inset-0 -z-5 bg-gradient-to-r from-yellow-50/90 to-yellow-100/80" />

            {/* Content */}
            <div className="relative z-10 flex items-start gap-3 rounded-md p-3 sm:p-4 bg-transparent border border-yellow-200">
                {showIcon && (
                    <div className="flex-shrink-0 mt-0.5">
                        <svg
                            className="w-5 h-5 text-yellow-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                    </div>
                )}

                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <p className="font-semibold text-sm sm:text-base text-yellow-800">{title}</p>
                            <p className="mt-1 text-xs sm:text-sm text-yellow-900/95 break-words">
                                {message}
                            </p>
                        </div>

                        <div className="ml-2 flex-shrink-0">
                            <button
                                type="button"
                                aria-label="Close alert"
                                onClick={() => onClose?.()}
                                className="p-1 rounded hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            >
                                <svg className="w-4 h-4 text-yellow-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 011.06 0L10 7.88l2.66-2.66a.75.75 0 111.06 1.06L11.06 8.94l2.66 2.66a.75.75 0 11-1.06 1.06L10 10l-2.66 2.66a.75.75 0 11-1.06-1.06L8.94 8.94 6.28 6.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {ctaText && ctaHref && (
                        <div className="mt-3">
                            <a
                                href={ctaHref}
                                className="inline-block text-sm font-medium text-yellow-800 underline hover:text-yellow-900"
                            >
                                {ctaText}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
