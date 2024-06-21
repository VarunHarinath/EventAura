import React from "react";
import robotPhoto from "../../assets/robot.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div>
        <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 my-24">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              Elevate events with our platform
              <span className="text-indigo-600 opacity-80">
                {" "}
                where engagement triumphs
              </span>
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              Empowering student-driven communities and college clubs to
              innovate, collaborate, and succeed, making their events successful
              with our event ticketing manager and payment gateway.
            </p>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <Link
                to="/secure/v3/Event-On-Boadring"
                className="px-7 py-3 w-full bg-indigo-600 text-gray-100 text-center rounded-md shadow-md block sm:w-auto hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src={robotPhoto}
              className="w-full mx-auto sm:w-10/12 lg:w-full hover:scale-105 transition-transform duration-500 ease-in-out"
              alt="Event Management Robot"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
