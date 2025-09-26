import React from "react";
import CustomSelect from "../Header/CustomSelect";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
};

const ProductToolbar = (props: Props) => {
  const { options } = props;
  console.log(options);
  return (
    <>
      <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
        <div className="flex items-center justify-between">
          {/* <!-- top bar left --> */}
          <div className="flex flex-wrap items-center gap-4">
            <CustomSelect options={options} />

            <p>
              Showing <span className="text-dark">9 of 50</span> Products
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductToolbar;
