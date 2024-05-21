import React, { useState } from "react";
import EventEULA from "./EventEULA";
import UserEULA from "./UserEULA ";

const TermsOfService = () => {
  return (
    <>
      <EventEULA />
      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      </span>
      <UserEULA />
    </>
  );
};

export default TermsOfService;
