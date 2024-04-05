export const formatDate = (dateString: string | Date): string => {

  if (!isNaN(Date.parse(dateString as string))) {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  } else {
    return ""; 
  }
};
