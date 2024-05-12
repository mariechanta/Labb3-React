import React from 'react';

const Attendance = ({ attendance }) => {
  return (
    <div>
      <h2>Närvaro</h2>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            {record.student}: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
