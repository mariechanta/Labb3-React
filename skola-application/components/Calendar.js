// components/Calendar.js
import React from 'react';

const Calendar = ({ events }) => {
  return (
    <div>
      <h2>Kalender</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
