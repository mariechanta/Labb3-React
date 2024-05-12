import React from 'react';

const GradingSystem = ({ grades }) => {
  return (
    <div>
      <h2>Betygssystem</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            <strong>{grade.grade}</strong>: {grade.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradingSystem;
