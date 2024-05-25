import React from "react";
import { format, parseISO } from "date-fns";

const FormattedDate = ({ dateString }) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "MMMM dd, yyyy");

  return <span>{formattedDate}</span>;
};

export default FormattedDate;
