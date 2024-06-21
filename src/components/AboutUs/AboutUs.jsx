import React, { useState, useRef, useEffect } from "react";
import { team } from "../../constants";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <section className=" relative overflow-hidden">
        <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative">
          <h1 className="mb-6 text-4xl font-bold tracking-tight leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-indigo-600">
            Elevate Your Events with EventAura
          </h1>
          <p className="mb-10 text-lg font-medium text-gray-400 lg:text-xl sm:px-8 lg:px-32 dark:text-gray-400">
            Elevate your event experience with EventAura, the all-in-one
            platform that combines event management tools with seamless
            financial services. Whether you're organizing paid conferences,
            workshops, or free gatherings, EventAura simplifies the process.
            Empower your student-driven communities and college clubs with
            effortless registration, secure payments, and comprehensive event
            management features.
          </p>
          <div className="flex justify-center">
            <Link
              to={"/contact-us"}
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div class="container mx-auto px-4 md:px-8">
          <div class="max-w-xl">
            <h3 class="text-3xl font-semibold text-indigo-700 sm:text-4xl">
              Meet Our Team
            </h3>
            <p class="mt-3 text-gray-400">
              Meet the talented individuals driving our company forward. With
              unique skills and a shared passion for innovation, our team
              delivers exceptional results for clients and partners. Discover
              the faces behind our success.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-center">
                  <div className="flex-none w-24 h-24">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-100 font-semibold sm:text-lg">
                      {item.name}
                    </h4>
                    <p className="text-indigo-600">{item.title}</p>
                    <div className="mt-3 flex gap-4 text-gray-400">
                      <a href={item.twitter}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_80)">
                            <path
                              fill="currentColor"
                              d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_80">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href={item.linkedin}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_68)">
                            <path
                              fill="currentColor"
                              d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_68">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
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

export default AboutUs;
