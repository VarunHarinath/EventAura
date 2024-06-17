import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CopyButton from "./utils/CopyButton";
import FormattedDate from "./utils/FormattedDate";

const Sucess = () => {
  const [data, setdata] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetctApi = async () => {
      try {
        const response = await axios.get(
          `https://tesract-server.onrender.com/event/${id}`
        );
        console.log(response);
        setLoading(false);
        setdata(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetctApi();
  }, []);
  if (loading) {
    return (
      <>
        <div className=" max-h-screen">
          <div className="mt-7">
            <div role="status" className="animate-pulse">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[500px] mt-2"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[450px] mt-2"></div>

              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div
            role="status"
            className="max-w md:m-10 m-5 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {data ? (
        <>
          <div className="mx-auto max-w-screen-xl">
            <header>
              <div className=" px-4 mt-10 py-8 sm:px-6 sm:py-12 lg:px-8 ">
                <div className="sm:flex sm:items-center  sm:justify-between">
                  <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
                      The{" "}
                      <span className="text-indigo-600">
                        {data?.eventName}{" "}
                      </span>{" "}
                      event has been created successfully! 🎉
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-200">
                      Navigate to the page or the admin pannel to manage the .
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                    <Link
                      to={`/event/${id}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg  border px-5 py-3 text-gray-100 transition hover:bg-gray-50 hover: hover:border-gray-200 hover:border focus:outline-none focus:ring hover:text-gray-900"
                      type="button"
                    >
                      <span className="text-sm font-semibold"> View Page </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>

                    <a
                      href={`https://tesrct-admin-pannel.vercel.app/secure/v3/dasboard/login/${id}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border  px-5 py-3 text-gray-100 transition hover:bg-gray-50 hover: hover:border-gray-200 hover:border focus:outline-none focus:ring hover:text-gray-900"
                      type="button"
                    >
                      <span className="text-sm font-semibold">
                        {" "}
                        View Admin Pannel{" "}
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 mx-7 sm:mx-20 min-h-screen ">
              <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700 ">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className=" font-semibold dark:text-white"> Name</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {" "}
                    {data?.eventName}{" "}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Description
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100 line-clamp-3 ... text-base/relaxed">
                    {data?.eventDescription}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white"> Venue</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data?.eventVenue}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Venue (Google Maps Link)
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data.eventVenueUrl ? (
                      <>{<CopyButton text={data?.eventVenueUrl} />}</>
                    ) : (
                      <>Not Specified</>
                    )}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white"> Hosted By</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data?.eventHostedBy}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white"> Speaker</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data?.eventSpeaker}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white"> Hosted On</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    <FormattedDate dateString={data?.eventDate} />
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Last Date For registration
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    <FormattedDate dateString={data?.eventLastDate} />
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    {" "}
                    Created On
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    <FormattedDate dateString={data?.eventCreatedDate} />
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Contact (Mail Id)
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data?.eventManagerMail}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Phone Number
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data?.eventManagerPhone}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Sucess;
