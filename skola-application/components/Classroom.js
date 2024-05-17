// components/Classroom.js
import React from 'react';

const Classroom = ({ classroom }) => {
  return (
    <div>
      <h2>Klassrum {classroom.number}</h2>
      <p>Lärare: {classroom.teacher}</p>
    </div>
  );
};

export default Classroom;
