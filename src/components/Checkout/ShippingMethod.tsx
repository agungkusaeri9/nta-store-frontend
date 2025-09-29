import React, { useState } from "react";
import Image from "next/image";

import courierData from "@/data/courier_data";
const ShippingMethod = ({ form, setForm }: { form: any; setForm: any }) => {
  const [shippingMethod, setShippingMethod] = useState("free");

  const handleForm = (e: any) => {
    setShippingMethod(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Shipping Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-4">
          {courierData?.map((courier, index) => (
            <label
              key={index}
              htmlFor={courier.name}
              className="flex cursor-pointer select-none items-center gap-3.5"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  name="shipping_method"
                  id={courier.name}
                  className="sr-only"
                  onChange={handleForm}
                  value={courier.name}
                />
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${shippingMethod === courier.name
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                    }`}
                ></div>
              </div>

              <div className="rounded-md w-full border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none">
                <div className="flex items-center">
                  <div className="pr-4">
                    <Image
                      src={courier.img}
                      alt="fedex"
                      width={64}
                      height={18}
                    />
                  </div>

                  <div className="border-l border-gray-4 pl-4">
                    <p className="font-semibold text-dark">N/A</p>
                    <p className="text-custom-xs">Standard Shipping</p>
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
