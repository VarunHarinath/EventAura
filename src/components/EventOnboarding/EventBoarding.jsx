import React, { useState } from "react";
import EventEULA from "../EULA/EventEULA";
import { Heading1 } from "lucide-react";
import EventOnboardingForm from "./EventOnboardingForm";

const EventBoarding = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const handleEULAForm = () => {
    setIsAgreed(true);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {isAgreed ? (
        <>
          <EventOnboardingForm />
        </>
      ) : (
        <>
          <div>
            <h1 className="mx-16 mt-5 font-semibold text-indigo-600 text-xl">
              **Accept the Terms of Services To Host you Event**
            </h1>
            <EventEULA />

            <div className="px-20">
              <div className="py-5">
                <input
                  type="checkbox"
                  checked={checkBox}
                  onChange={() => setCheckBox(!checkBox)}
                />
                <label className="px-3" htmlFor="termsOfService">
                  Acknowledge Terms of Service
                </label>
              </div>
              {checkBox ? (
                <>
                  <button
                    className="py-2 px-4 rounded-md bg-indigo-600 text-white hover:scale-105"
                    onClick={handleEULAForm}
                  >
                    Acknowledge Terms of Service
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="py-2 px-4 rounded-md bg-indigo-600 text-white  disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-800"
                    disabled
                  >
                    Acknowledge Terms of Service
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EventBoarding;
