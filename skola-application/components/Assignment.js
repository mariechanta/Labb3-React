// components/Assignment
import React from 'react';

const Assignment = ({ assignment }) => {
  return (
    <div>
      <h2>Uppgift: {assignment.title}</h2>
      <p>Beskrivning: {assignment.description}</p>
    </div>
  );
};

export default Assignment;
