import React from 'react';

const Assignment = ({ assignment }) => {
  return (
    <div>
      <h2>Uppgift</h2>
      <p>Namn: {assignment.name}</p>
      <p>Beskrivning: {assignment.description}</p>
    </div>
  );
};

export default Assignment;
