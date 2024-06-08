import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormattedDate from "../EventOnboarding/utils/FormattedDate";

const UserSucess = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://tesract-server.onrender.com/participant/${id}`
        );
        console.log(response.data);
        setdata(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
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
                      You have successfully registered for the{" "}
                      <span className=" text-indigo-600">
                        {" "}
                        {data?.eventName}
                      </span>{" "}
                      event ! 🎉
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-200">
                      Navigate to the page to know more or check mail for
                      detailed information
                    </p>
                  </div>
                </div>
              </div>
            </header>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 mx-7 sm:mx-20  ">
              <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700 ">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className=" font-semibold dark:text-white">Event Name</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {" "}
                    {data?.eventName}{" "}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">Name</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data?.name}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">College</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data.college ? data.college : "Not Provided"}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Roll Number
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data.rollNumber ? data.rollNumber : "Not Provided"}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Phone Number
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data.phoneNumber}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">email</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data.email}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">
                    Transcation Id
                  </dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data.paymentData.data.transactionId
                      ? data.paymentData.data.transactionId
                      : "-NA- "}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">Price</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100">
                    {data.eventPrice === "0" ? "FREE" : data.eventPrice}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold  dark:text-white">QR Code</dt>
                  <dd className=" sm:col-span-2 dark:text-gray-100 ">
                    <img src={data.qrCode} alt="Participant Qr Code" />
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

export default UserSucess;
