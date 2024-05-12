import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Studentlista</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};
