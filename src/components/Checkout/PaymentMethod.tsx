import React, { useState } from "react";
import Image from "next/image";
import PaymentMethodData from "@/data/payment_method_data";

const PaymentMethod = ({ form, setForm }: { form: any; setForm: any }) => {
  const [payment, setPayment] = useState("bank");
  const handleForm = (e: any) => {
    setPayment(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Payment Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-3">
          {PaymentMethodData?.map((payMethod, index) => (
            <label
              key={index}
              htmlFor={payMethod.name}
              className="flex cursor-pointer select-none items-center gap-4"
            >
              <div className="relative">
                <input
                  value={payMethod.name}
                  type="checkbox"
                  name="payment_method"
                  id={payMethod.name}
                  className="sr-only"
                  onChange={handleForm}
                />
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${payment === payMethod.name
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                    }`}
                ></div>
              </div>

              <div
                className={`rounded-md w-full border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none ${payment === payMethod.name
                  ? "border-transparent bg-gray-2"
                  : " border-gray-4 shadow-1"
                  }`}
              >
                <div className="flex items-center">
                  <div className="pr-2.5">
                    <Image
                      src={payMethod.img}
                      alt={payMethod.name}
                      width={29}
                      height={12}
                    />
                  </div>

                  <div className="border-l border-gray-4 pl-2.5">
                    <p>{payMethod.name}</p>
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

export default PaymentMethod;
