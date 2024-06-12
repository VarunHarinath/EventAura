import React from "react";
import { pricingOptions } from "../../constants";

const Pricing = () => {
  return (
    <section className="relative py-14 pt-20 ">
      <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
        <div className="max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
          <h3 className="text-indigo-600 font-semibold">Pricing</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Pay as you grow
          </p>
          <div className="max-w-xl">
            <p>
              Flexible plans tailored to your needs, ensuring you only pay for
              what you use.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center sm:flex space-x-14">
          {pricingOptions.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 border-indigo-600 sm:mt-0 sm:rounded-xl   mx-4`}
            >
              <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
                <span className="text-gray-100 font-medium">{item.title}</span>
                <div className="text-gray-50 text-3xl font-semibold">
                  {item.price}{" "}
                  <span className="text-xl font-normal ">/ticket</span>
                </div>
              </div>
              <ul className="p-4 py-8 space-y-3 md:p-8">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-indigo-600`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
