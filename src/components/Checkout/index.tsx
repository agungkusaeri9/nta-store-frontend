"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import formatRupiah from "@/utils/currencyFormat";
import { sendCheckoutToWhatsApp } from "@/utils/whatsapp";
import configData from "@/data/config_data";
import WarningAlert from "../Alert/WarningAlert";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cartReducer);
  const totalPrice = useSelector(selectTotalPrice);
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    address: "",
    notes: "",
    products: cartItems.items,
    payment_method: "",
    shipping_method: "",
  })

  const handleForm = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const router = useRouter();

  useEffect(() => {
    if (cartItems.items.length === 0) {
      toast.error("Keranjang belanja masih kosong");
      router.push("/");
      return;
    }
  });

  const WA_NUMBER = configData.whatsapp_number;

  const handleToCheckout = async () => {
    if (!form.first_name || !form.last_name || !form.address || !form.payment_method || !form.shipping_method) {
      toast.error("Lengkapi data terlebih dahulu");
      return
    }
    if (cartItems.items.length === 0) {
      toast.error("Keranjang belanja masih kosong");
      return;
    }
    const checkoutForm = { ...form, products: cartItems.items };
    setLoading(true);
    try {
      // opsi tanpa createOrder
      await sendCheckoutToWhatsApp({
        phone: WA_NUMBER,
        form: checkoutForm,
        cartItems,
        totalPrice,
        openInNewTab: true,
      });
    } catch (err) {
      console.error(err);
      alert("Gagal mengarahkan ke WhatsApp. Cek console.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {/* <div role="alert" className="flex items-start gap-3 rounded-md p-3 bg-yellow-50 border border-yellow-300 text-yellow-800">
            <svg className="w-5 h-5 flex-shrink-0 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>

            <div>
              <p className="font-semibold text-sm">Perhatian!</p>
              <p className="mt-1 text-sm text-yellow-900">Nominal di bawah ini belum termasuk ongkos kirim.</p>
            </div>
          </div> */}
          <form>



            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">

              {/* <!-- checkout left --> */}
              <div className="lg:max-w-[670px] w-full">

                {/* <!-- login box --> */}
                {/* <Login /> */}

                {/* <!-- billing details --> */}
                <Billing form={form} setForm={setForm} />

                {/* <!-- address box two --> */}
                {/* <Shipping /> */}

                {/* <!-- others note box --> */}
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                  <div>
                    <label htmlFor="notes" className="block mb-2.5">
                      Catatan (optional)
                    </label>

                    <textarea
                      onChange={handleForm}
                      name="notes"
                      id="notes"
                      rows={5}
                      placeholder="Notes about your order, e.g. speacial notes for delivery."
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* // <!-- checkout right --> */}
              <div className="max-w-[455px] w-full">
                {/* <!-- order list box --> */}
                <div className="bg-white shadow-1 rounded-[10px]">
                  <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                    <h3 className="font-medium text-xl text-dark">
                      Your Order
                    </h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    {/* <!-- title --> */}
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <div>
                        <h4 className="font-medium text-dark">Product</h4>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark text-right">
                          Subtotal
                        </h4>
                      </div>
                    </div>

                    {cartItems.items.length > 0 &&
                      cartItems.items.map((item, key) => (
                        <div
                          key={item.id || key}
                          className="flex items-center justify-between py-5 border-b border-gray-3"
                        >
                          <div>
                            <p className="text-dark">{item.title}</p>
                          </div>
                          <div>
                            <p className="text-dark text-right">
                              {formatRupiah(item.price)}
                            </p>
                          </div>
                        </div>
                      ))}

                    {/* <!-- product item --> */}
                    {/* <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <div>
                        <p className="text-dark">Shipping Fee</p>
                      </div>
                      <div>
                        <p className="text-dark text-right"></p>
                      </div>
                    </div> */}

                    {/* <!-- total --> */}
                    <div className="flex items-center justify-between pt-5">
                      <div>
                        <p className="font-medium text-lg text-dark">Total</p>
                      </div>
                      <div>
                        <p className="font-medium text-lg text-dark text-right">
                          {formatRupiah(totalPrice)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- coupon box --> */}
                {/* <Coupon /> */}

                {/* <!-- shipping box --> */}
                <ShippingMethod form={form} setForm={setForm} />

                {/* <!-- payment box --> */}
                <PaymentMethod form={form} setForm={setForm} />

                {/* <!-- checkout button --> */}
                <button
                  disabled={loading}
                  type="button"
                  onClick={handleToCheckout}
                  className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
                >
                  {loading ? "Loading..." : " Process to Checkout"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
