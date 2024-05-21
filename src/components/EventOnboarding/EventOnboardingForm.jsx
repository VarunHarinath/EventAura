import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bycrpt from "bcryptjs";

const EventOnboardingForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventVenueUrl, setEventVenueUrl] = useState("");
  const [eventManagerMail, setEventManagerMail] = useState("");
  const [eventManagerPhone, setEventManagerPhone] = useState("");
  const [eventAdminPassword, setEventAdminPassword] = useState("");
  const [eventDate, seteventDate] = useState(null);
  const [eventLastDate, seteventLastDate] = useState(null);
  const [messageDate, setMessageDate] = useState("");
  const [messageLastDate, setMessageLastDate] = useState("");

  const handleEventLastDate = (date) => {
    if (eventLastDate && date < eventLastDate) {
      setMessageLastDate("Please select a date after the event date");
      seteventLastDate(null);
      return;
    }
    seteventLastDate(date);
    setMessageLastDate("");
  };

  const handleEventDate = (date) => {
    if (date < new Date()) {
      setMessageDate("Please select a future date");
      seteventDate(null);
      return;
    }
    seteventDate(date);
    setMessageDate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const salt = bycrpt.genSaltSync(10);
    const adminHashedPassword = bycrpt.hashSync(eventAdminPassword, salt);
    const data = {
      eventName: eventName,
      eventDescription: eventDescription,
      eventVenue: eventVenue,
      eventVenueUrl: eventVenueUrl,
      eventManagerMail: eventManagerMail,
      eventManagerPhone: eventManagerPhone,
      eventAdminPassword: adminHashedPassword,
      eventDate: eventDate,
      eventLastDate: eventLastDate,
    };
    console.log("Submitted:", data);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center pb-48 mt-56">
      <div className="max-w-sm w-full flex-grow text-white">
        {" "}
        <div className="text-center pb-8">
          <h3 className="text-3xl font-bold sm:text-4xl">Sign Up</h3>
          <p className="mt-2 text-lg">
            Join our community and unlock awesome features.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Event Name</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Event Description
            </label>
            <textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Event Venue
            </label>
            <input
              type="text"
              id="eventVenue"
              value={eventVenue}
              onChange={(e) => setEventVenue(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Event Venue URL
            </label>
            <input
              type="url"
              id="eventVenueUrl"
              value={eventVenueUrl}
              onChange={(e) => setEventVenueUrl(e.target.value)}
              placeholder="https://example.com ( Google Maps URL )"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Event Date</label>
            <DatePicker
              selected={eventDate}
              onChange={handleEventDate}
              dateFormat="yyyy-MM-dd"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <span className="py-2 text-red-600">{messageDate}</span>
          <div>
            <label className="block text-sm font-medium mb-2">
              Event Last Date for Registrations
            </label>
            <DatePicker
              selected={eventLastDate}
              onChange={handleEventLastDate}
              dateFormat="yyyy-MM-dd"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <span className="py-2 text-red-600">{messageLastDate}</span>
          <div>
            <label className="block text-sm font-medium mb-2">
              Email(
              <span className=" font-light">for furthur communications</span>)
            </label>
            <input
              type="email"
              id="eventMail"
              value={eventManagerMail}
              onChange={(e) => setEventManagerMail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number (
              <span className="font-light">
                to display on the registration page
              </span>
              )
            </label>
            <input
              type="tel"
              id="eventNumber"
              value={eventManagerPhone}
              onChange={(e) => setEventManagerPhone(e.target.value)}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number."
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Admin Pannel Password{" "}
            </label>
            <input
              type="text"
              id="eventPassword"
              value={eventAdminPassword}
              onChange={(e) => setEventAdminPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>

          <div class=" border-indigo-500 border p-6 flex text-sm rounded-lg shadow-lg">
            <ol class="list-decimal w-full space-y-3">
              <li>
                All Communication will be done through the email provided i.e.
                {eventManagerMail}
              </li>
              <li>
                The credinals will be sent to your email id for the admin pannel
              </li>
            </ol>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-center text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg duration-150"
          >
            Create Event
          </button>
        </form>
      </div>
    </main>
  );
};

export default EventOnboardingForm;
