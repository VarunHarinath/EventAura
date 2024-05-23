import axios from "axios";
import React, { useState, useEffect } from "react";
import { formatDate } from "./utils/formatDate";
const Events = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://tesract-server.onrender.com/event"
        );
        console.log(response.data.data);
        setEventData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <>
      {eventData.map((event) => {
        const { year, formattedDate } = formatDate(event.eventDate);
        return (
          <>
            {/* On Going Events */}
            {/* past events */}

            <div></div>

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
                    <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                      {event.eventName}
                    </h3>
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-300">
                    {event.eventDescription}
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-indigo-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-100 transition hover:bg-indigo-700 rounded-3xl"
                  >
                    Book your event
                  </a>
                </div>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
};

export default Events;
