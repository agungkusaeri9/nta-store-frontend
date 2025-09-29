"use client";
import React, { useMemo, useState } from "react";
import formatRupiah from "@/utils/currencyFormat";

type Product = {
    id?: number | string;
    title: string;
    price?: number;
    quantity?: number;
    discountedPrice?: number | null;
};

type FormShape = {
    first_name?: string;
    last_name?: string;
    address?: string;
    notes?: string;
    products?: Product[];
    payment_method?: string;
    shipping_method?: string;
};

type Props = {
    form: FormShape;
    cartItems: { items: Product[] };
    totalPrice: number;
    phone: string; // e.g. "+628123456789"
    buttonText?: string;
    className?: string;
    showPreview?: boolean; // if true, shows modal preview before opening wa
};

function buildWhatsAppMessage(form: FormShape, totalPrice: number) {
    const p = form.products ?? [];
    const lines: string[] = [];
    lines.push("Pesanan Baru dari Website");
    lines.push("-------------------------");
    lines.push(`Nama    : ${form.first_name ?? ""} ${form.last_name ?? ""}`.trim());
    lines.push(`Alamat  : ${form.address ?? "-"}`);
    lines.push(`Catatan : ${form.notes ?? "-"}`);
    lines.push("");
    lines.push("Produk:");
    if (p.length > 0) {
        p.forEach((prod, idx) => {
            const priceText = prod.price ? formatRupiah(prod.price) : "-";
            const discText =
                typeof prod.discountedPrice !== "undefined" && prod.discountedPrice !== null
                    ? ` (disc ${formatRupiah(prod.discountedPrice)})`
                    : "";
            lines.push(`${idx + 1}. ${prod.title} x${prod.quantity ?? 1} — ${priceText}${discText}`);
        });
    } else {
        lines.push("- (tidak ada produk)");
    }
    lines.push("");
    lines.push(`Metode Pengiriman : ${form.shipping_method ?? "-"}`);
    lines.push(`Metode Pembayaran : ${form.payment_method ?? "-"}`);
    lines.push("");
    lines.push(`Total Harga: ${formatRupiah(totalPrice)}`);
    lines.push("-------------------------");
    lines.push("Mohon konfirmasi pembayarannya. Terima kasih!");
    return lines.join("\n");
}

export default function BuildWhatsAppButton({
    form,
    cartItems,
    totalPrice,
    phone,
    buttonText = "Kirim via WhatsApp",
    className = "",
    showPreview = true,
}: Props) {
    const [openPreview, setOpenPreview] = useState(false);

    // merged form (ensure products are current)
    const mergedForm = useMemo(() => ({ ...form, products: form.products ?? cartItems.items ?? [] }), [form, cartItems]);

    const message = useMemo(() => buildWhatsAppMessage(mergedForm, totalPrice), [mergedForm, totalPrice]);

    const phoneDigits = useMemo(() => phone.replace(/\D/g, ""), [phone]);

    const handleOpenWA = () => {
        if (!phoneDigits) {
            alert("Nomor WhatsApp tujuan belum diatur. Hubungi admin.");
            return;
        }
        const waUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank");
    };

    return (
        <>
            <button
                type="button"
                className={`w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5 ${className}`}
                onClick={() => (showPreview ? setOpenPreview(true) : handleOpenWA())}
            >
                {buttonText}
            </button>

            {/* Preview modal (basic) */}
            {openPreview && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
                >
                    <div className="w-full max-w-xl bg-white rounded-md p-5">
                        <h3 className="font-semibold text-lg mb-3">Preview Pesan WhatsApp</h3>

                        <div className="max-h-[50vh] overflow-auto rounded-md border p-3 bg-gray-50 whitespace-pre-wrap text-sm text-dark">
                            {message}
                        </div>

                        <div className="flex gap-3 justify-end mt-4">
                            <button
                                className="px-4 py-2 rounded-md border"
                                onClick={() => setOpenPreview(false)}
                            >
                                Batal
                            </button>
                            <button
                                className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700"
                                onClick={() => {
                                    setOpenPreview(false);
                                    handleOpenWA();
                                }}
                            >
                                Kirim ke WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
