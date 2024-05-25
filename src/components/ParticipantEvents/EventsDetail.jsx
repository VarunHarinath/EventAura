import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CopyButton from "../EventOnboarding/utils/CopyButton";
import FormattedDate from "../EventOnboarding/utils/FormattedDate";
import axios from "axios";

const EventsDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://tesract-server.onrender.com/event/${id}`
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      {data && (
        <>
          <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-indigo-700 sm:text-3xl opacity-80 ">
                    {data.eventHostedBy}
                  </h1>
                  <p className="mt-1.5 text-base text-gray-200">presnets 🎉</p>
                  <p className="mt-1.5 text-2xl sm:text-3xl  text-indigo-600">
                    {data.eventName}
                  </p>
                  <p className="mt-1.5 text-xs text-gray-200">
                    ✨Amazing isn't it✨
                  </p>
                  <p className="mt-1.5 text-xs text-gray-200">
                    Want to know more about the event? 🤔
                  </p>
                </div>
              </div>
            </div>
          </header>
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 mx-7 sm:mx-28">
            <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">
                  What event ? 🤔
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {data.eventName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">
                  Who is Conducting ❓❓
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {data.eventHostedBy}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">
                  Where 📍
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {data.eventVenue}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold  dark:text-white">
                  Location 📌 (Google Maps Link)
                </dt>
                <dd className=" sm:col-span-2 dark:text-gray-100">
                  <>{<CopyButton text={data.eventVenueUrl} />}</>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">
                  When ? 🕓
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  <FormattedDate dateString={data.eventDate} />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">
                  How much? 💸
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  ₹{data.eventPrice}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">
                  Last Date to apply ? 🎇
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  <FormattedDate dateString={data.eventLastDate} />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">
                  Why this event ?
                </dt>
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  {data.eventDescription}
                </dd>
              </div>
            </dl>
          </div>
        </>
      )}
    </>
  );
};

export default EventsDetail;
