import React from 'react';

const Grade = ({ grade }) => {
  return (
    <div>
      <h2>Betyg</h2>
      <p>Student: {grade.student}</p>
      <p>Uppgift: {grade.assignment}</p>
      <p>Betyg: {grade.grade}</p>
    </div>
  );
};

export default Grade;
