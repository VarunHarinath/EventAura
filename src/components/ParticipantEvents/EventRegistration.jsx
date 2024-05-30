import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "./utils/Modal";
import UserEULA from "../EULA/UserEULA ";
import axios from "axios";

const EventRegistration = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setdata] = useState(null);
  const [name, setName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://tesract-server.onrender.com/event/${eventId}`
        );

        setdata(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const Userdata = {
      name,
      collegeName,
      email,
      rollNumber,
      phoneNumber,
    };

    if ((data && data.eventPrice) == "0") {
      try {
        const response = await axios.post(
          `https://tesract-server.onrender.com/registration/${eventId}`,
          Userdata
        );
        console.log(response.data);
        if (response && response.data.message === true) {
          navigate(`/event/${response.data.id}/success`);
          return;
        }
      } catch (error) {
        console.log(error);
        navigate(`/event/failure`);
      }

      return;
    }
    console.log("paid ticket");
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  if (loading) {
    return (
      <>
        <div
          role="status"
          class="w-full min-h-screen flex flex-col items-center justify-center px-2 py-16 sm:px-6 sm:py-24 animate-pulse"
        >
          <div class="w-full max-w-md md:max-w-2xl lg:max-w-4xl space-y-8 bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-600 flex flex-col md:flex-row md:space-y-0 md:space-x-8">
            <div class="md:w-1/2 space-y-6">
              <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
              <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
              <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
            </div>

            <div class="md:w-1/2 space-y-4 bg-gray-800 p-2 sm:p-8 rounded-lg shadow-lg border border-gray-700">
              <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-4"></div>
              <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                </div>
              </div>
              <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-4"></div>
              <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-2"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[480px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[440px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-2 py-16 sm:px-6 sm:py-24">
        <div className="w-full max-w-2xl lg:max-w-4xl flex flex-col lg:flex-row items-center bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-600">
          <div className="w-full lg:w-1/2 p-4">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-gray-200">
                Student Registration
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Complete the form to proceed with your payment.
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="College Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Roll Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="^\d{10}$"
                  title="Enter a 10-digit phone number without any dashes or spaces."
                  required
                />
              </div>
              <div className="relative">
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 bg-gray-700 border-gray-600"
                      checked={isAgreed}
                      onChange={() => setIsAgreed(!isAgreed)}
                    />
                    <span className="ml-2 text-gray-200">
                      I accept the{" "}
                      <button
                        type="button"
                        onClick={handleModalOpen}
                        className="text-indigo-500 underline"
                      >
                        Terms and Conditions
                      </button>
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className={`w-full flex justify-center items-center px-4 py-3 text-white font-medium rounded-lg focus:outline-none duration-300 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 active:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed ${
                    !isAgreed ? "disabled" : ""
                  }`}
                  disabled={!isAgreed}
                >
                  {data?.eventPrice === "0"
                    ? "Complete your registration"
                    : "Pay with PhonePay"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-8 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-gray-200 py-0.5">
                Event Details
              </h3>
              <div className="mt-4 text-sm text-gray-400 space-y-2">
                <p className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Event Name:</span>
                  <span className="text-gray-300">{data?.eventName}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Venue:</span>
                  <span className="text-gray-300">{data?.eventVenue}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Cost:</span>
                  <span className="text-gray-300">
                    {" "}
                    {data.eventPrice == "0" ? (
                      <>
                        <p>FREE</p>
                      </>
                    ) : (
                      <>
                        <p>₹{data.eventPrice}</p>
                      </>
                    )}
                  </span>
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Important Information
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>
                      You will receive a confirmation email after successfully
                      registering for the event.
                    </li>
                    <li>
                      A QR code and a message from the event organizer will be
                      included in the email.
                    </li>
                    <li>
                      If you face any problems, escalate them to{" "}
                      <a
                        href="mailto:vedasolutionshyderabad@gmail.com"
                        className="text-indigo-500"
                      >
                        vedasolutionshyderabad@gmail.com
                      </a>
                      .
                    </li>
                    <li>
                      Check your email regularly for any updates or changes
                      regarding the event schedule.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleModalClose}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 space-y-4 overflow-y-auto max-h-96">
                  <UserEULA />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default EventRegistration;
