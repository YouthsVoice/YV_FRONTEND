import React from 'react';

interface Props {
  fromDate: string; // Assuming fromDate is coming as a string from the backend
}

const DateTimeFormatter: React.FC<Props> = ({ fromDate }) => {
  // Convert string date to Date object
  const dateObject = new Date(fromDate);

  // Format the date using toLocaleString
  const formattedDate = dateObject.toLocaleString('en-US', {
    weekday: 'long', // e.g., "Thursday"
    year: 'numeric', // e.g., "2024"
    month: 'long', // e.g., "October"
    day: 'numeric', // e.g., "3"
    hour: 'numeric', // e.g., "2"
    minute: 'numeric', // e.g., "30"
    hour12: true, // 12-hour clock (AM/PM)
  });

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTimeFormatter;
