import React from 'react';

const Schedule = ({ schedule }) => {
  return (
    <div>
      <h2>Schema</h2>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
