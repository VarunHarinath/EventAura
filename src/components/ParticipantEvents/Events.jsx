import axios from "axios";
import React, { useState, useEffect } from "react";
import { formatDate } from "./utils/formatDate";
import { Link } from "react-router-dom";
const Events = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://tesract-server.onrender.com/event"
        );

        setEventData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <>
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
      </>
    );
  }
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-ms-1 me-1.5 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p className="whitespace-nowrap text-sm">On Going</p>
        </span>
      </div>

      {eventData.map((event) => {
        const { year, formattedDate } = formatDate(event.eventDate);
        if (event.eventStaus) {
          return (
            <>
              <article className=" mx-5 flex my-6  transition hover:shadow-2xl  dark:shadow-gray-800/25 sm:mx-7 md:mx-20 lg:mx-28 border border-gray-800 rounded-3xl p-3">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="{event.eventDate}"
                    className="flex items-center justify-between gap-4 text-xs font-semibold uppercase text-gray-900 dark:text-gray-200"
                  >
                    <span>{year}</span>
                    <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                    <span>{formattedDate}</span>
                  </time>
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
                    <p>
                      <h3 className="font-bold uppercase text-gray-900 dark:text-white text-lg">
                        {event.eventName}
                      </h3>
                    </p>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600 dark:text-gray-300">
                      {event.eventDescription}
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                      to={`/event/${event._id}`}
                      className="block bg-indigo-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-100 transition hover:bg-indigo-700 rounded-3xl"
                    >
                      Book your event
                    </Link>
                  </div>
                </div>
              </article>
            </>
          );
        }
      })}
      <div className="flex items-center justify-center mt-5">
        <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700 dark:bg-amber-700 dark:text-amber-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-ms-1 me-1.5 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
            />
          </svg>

          <p className="whitespace-nowrap text-sm">Completed</p>
        </span>
      </div>
      {eventData.map((event) => {
        const { year, formattedDate } = formatDate(event.eventDate);
        if (!event.eventStaus) {
          return (
            <>
              <article className=" mx-5 flex my-6  transition hover:shadow-2xl  dark:shadow-gray-800/25 sm:mx-7 md:mx-20 lg:mx-28 border border-gray-800 rounded-3xl p-3">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="{event.eventDate}"
                    className="flex items-center justify-between gap-4 text-xs font-semibold uppercase text-gray-900 dark:text-gray-200"
                  >
                    <span>{year}</span>
                    <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                    <span>{formattedDate}</span>
                  </time>
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
                    <p>
                      <h3 className="font-bold uppercase text-gray-900 dark:text-white text-lg">
                        {event.eventName}
                      </h3>
                    </p>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600 dark:text-gray-300">
                      {event.eventDescription}
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                      to={`/event/${event._id}`}
                      className="block bg-indigo-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-100 transition hover:bg-indigo-700 rounded-3xl opacity-50 cursor-not-allowed"
                    >
                      Book your event
                    </Link>
                  </div>
                </div>
              </article>
            </>
          );
        }
      })}
    </>
  );
};

export default Events;
