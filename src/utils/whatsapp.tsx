// utils/whatsapp.ts
import formatRupiah from "@/utils/currencyFormat";

export type ProductItem = {
    id?: number | string;
    title: string;
    price?: number;
    quantity?: number;
    discountedPrice?: number | null;
    imgs?: { thumbnails?: string[]; previews?: string[] };
};

export type CheckoutForm = {
    first_name?: string;
    last_name?: string;
    phone?: string; // buyer phone (opsional tapi recommended)
    address?: string;
    notes?: string;
    products?: ProductItem[];
    payment_method?: string;
    shipping_method?: string;
};

export type SendWhatsappOptions = {
    /**
     * optional phone override (format +62...). 
     * If not provided, helper will try NEXT_PUBLIC_OWNER_WHATSAPP.
     */
    phone?: string;
    form: CheckoutForm;
    cartItems?: { items: ProductItem[] };
    totalPrice: number;
    createOrderFn?: (payload: any) => Promise<string | null | undefined>;
    openInNewTab?: boolean;
    maxMessageLength?: number;
};

/** load owner phone from env (fallback) */
export const OWNER_WHATSAPP = typeof process !== "undefined"
    ? (process.env.NEXT_PUBLIC_OWNER_WHATSAPP || "")
    : "";

/** sanitize phone to digits only (wa.me expects digits, without +) */
export function normalizePhone(phone: string) {
    return (phone || "").replace(/\D/g, "");
}

/** Build readable WhatsApp message text from form + products.
 * includes optional thumbnail URLs per product (as text).
 */
export function buildWhatsAppMessage(
    form: CheckoutForm,
    products: ProductItem[],
    totalPrice: number,
    orderUrl?: string
) {
    const lines: string[] = [];
    lines.push("Pesanan Baru");
    lines.push("-------------------------");

    const name = `${form.first_name ?? ""} ${form.last_name ?? ""}`.trim();
    if (name) lines.push(`Nama    : ${name}`);
    if (form.phone) lines.push(`HP      : ${form.phone}`);
    if (form.address) lines.push(`Alamat  : ${form.address}`);
    lines.push(`Catatan : ${form.notes ?? "-"}`);
    lines.push("");

    lines.push("Produk:");
    if (products && products.length > 0) {
        products.forEach((p, idx) => {
            const priceText = typeof p.price === "number" ? formatRupiah(p.price) : "-";
            const discText =
                typeof p.discountedPrice === "number" && p.discountedPrice !== null
                    ? ` (disc ${formatRupiah(p.discountedPrice)})`
                    : "";
            lines.push(`${idx + 1}. ${p.title} x${p.quantity ?? 1} — ${priceText}${discText}`);
            // include first thumbnail url if available (as text)
            // const thumb = p.imgs?.thumbnails?.[0] ?? p.imgs?.previews?.[0];
            // if (thumb) lines.push(`   Img: ${thumb}`);
        });
    } else {
        lines.push("- (tidak ada produk)");
    }

    lines.push("");
    lines.push(`Metode Pengiriman : ${form.shipping_method ?? "-"}`);
    lines.push(`Metode Pembayaran : ${form.payment_method ?? "-"}`);
    lines.push("");
    lines.push(`Total Harga: ${formatRupiah(totalPrice)}`);

    if (orderUrl) {
        lines.push("");
        lines.push(`Invoice / Detail Order: ${orderUrl}`);
    }

    lines.push("-------------------------");
    lines.push("Mohon konfirmasi pembayaran & ketersediaan stok. Terima kasih!");
    return lines.join("\n");
}

/** Get wa.me url with encoded text */
export function getWhatsAppUrl(phone: string, message: string) {
    const phoneDigits = normalizePhone(phone);
    if (!phoneDigits) throw new Error("Nomor WhatsApp tidak valid.");
    // prefer api.whatsapp.com as fallback for some environments
    return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

/**
 * Main helper: create order (optional) then redirect/open WA to owner.
 * Returns the waUrl used.
 */
export async function sendCheckoutToWhatsApp(opts: SendWhatsappOptions): Promise<string> {
    const {
        phone: overridePhone,
        form,
        cartItems,
        totalPrice,
        createOrderFn,
        openInNewTab = false,
        maxMessageLength = 1500,
    } = opts;

    const products = form.products ?? cartItems?.items ?? [];
    const phoneToUse = overridePhone || OWNER_WHATSAPP;
    if (!phoneToUse) throw new Error("No owner phone configured (NEXT_PUBLIC_OWNER_WHATSAPP or override).");

    // optionally create order first and get orderUrl
    let orderUrl: string | undefined;
    if (typeof createOrderFn === "function") {
        try {
            const res = await createOrderFn({ form, products, totalPrice });
            if (res) orderUrl = res;
        } catch (err) {
            console.warn("createOrderFn failed:", err);
        }
    }

    let message = buildWhatsAppMessage(form, products, totalPrice, orderUrl);

    // truncate while preserving orderUrl if present
    if (message.length > maxMessageLength) {
        const keepUrl = orderUrl ? `\n\nInvoice: ${orderUrl}` : "";
        const truncated = message.slice(0, Math.max(0, maxMessageLength - keepUrl.length - 5));
        message = truncated + "\n[...]" + keepUrl;
    }

    const waUrl = getWhatsAppUrl(phoneToUse, message);

    if (typeof window !== "undefined") {
        if (openInNewTab) window.open(waUrl, "_blank");
        else window.location.href = waUrl;
    }

    return waUrl;
}
