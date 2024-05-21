import React, { useState } from "react";

const PasswordInput = ({ label, id }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        id={id}
        required
        className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:ring-1"
      />
      <i
        className={`fas fa-eye absolute top-50% right-3 transform -translate-y-50% cursor-pointer ${
          isPasswordVisible ? "text-indigo-500" : "text-gray-300"
        }`}
        onClick={togglePasswordVisibility}
      ></i>
    </div>
  );
};

export default PasswordInput;
