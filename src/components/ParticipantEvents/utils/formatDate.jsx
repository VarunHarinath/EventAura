export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const options = { month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options).toUpperCase();
  return { year, formattedDate };
};
