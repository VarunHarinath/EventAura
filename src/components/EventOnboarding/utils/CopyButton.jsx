import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { Clipboard, Check } from "lucide-react";
import "react-tooltip/dist/react-tooltip.css";

const CopyButton = ({ text }) => {
  const [tooltipText, setTooltipText] = useState("Copy to clipboard");
  const [icon, setIcon] = useState("default");

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setTooltipText("Copied!");
      setIcon("success");
      setTimeout(() => {
        setTooltipText("Copy to clipboard");
        setIcon("default");
      }, 2000);
    });
  };

  return (
    <div className="relative w-auto">
      <label htmlFor="npm-install-copy-button" className="sr-only">
        Label
      </label>
      <input
        id="npm-install-copy-button"
        type="text"
        className="col-span-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={text}
        disabled
        readOnly
      />
      <button
        data-tooltip-id="tooltip-copy"
        data-tooltip-content={tooltipText}
        className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
        onClick={handleCopy}
      >
        {icon === "default" ? (
          <Clipboard className="w-5 h-5" />
        ) : (
          <Check className="w-5 h-5 text-blue-700 dark:text-blue-500" />
        )}
      </button>
      <Tooltip id="tooltip-copy" place="top" effect="solid" />
    </div>
  );
};

export default CopyButton;
