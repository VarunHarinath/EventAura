import React from "react";
import { workflow } from "../../constants";
import { CheckCircle2 } from "lucide-react";
import PhonePayLogo from "../../assets/PhonePay.png";

const WorkFlow = () => {
  return (
    <>
      <section className=" my-24 pt-20">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 lg:flex gap-16">
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <img
              src={PhonePayLogo}
              className="w-full shadow-2xl rounded-lg border transform hover:scale-105 transition-transform duration-500"
              style={{
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="max-w-xl space-y-3">
              <h3 className="text-indigo-600 font-semibold">Workflow</h3>
              <p className="text-gray-100 text-3xl font-semibold sm:text-4xl">
                Steps for Registration
              </p>
              <p className="text-gray-300">
                Follow these steps to register for the event.
              </p>
            </div>
            <div className="mt-12 max-w-lg lg:max-w-none">
              <ul className="space-y-8">
                {workflow.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="flex-none w-8 h-8 text-indigo-600 rounded-lg flex items-center justify-center">
                      <CheckCircle2 />
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-100 font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-gray-300">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFlow;
