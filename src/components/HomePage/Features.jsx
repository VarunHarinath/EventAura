import React from "react";
import { features } from "../../constants";

const Features = () => {
  return (
    <>
      <section className="my-20 pt-16">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8">
          <div className="max-w-xl mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 opacity-80 text-2xl font-semibold">
              Features
            </h3>
            <p className="text-gray-100 text-3xl font-semibold sm:text-4xl">
              Do more with less complexity
            </p>
            <p>
              Empower your student community with our all-in-one event
              management solution, featuring secure payments, automated mailing,
              dynamic QR ticketing, and advanced analytics.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-600">
                      {item.text}
                    </h4>
                    <p className="mt-3 text-gray-300">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
