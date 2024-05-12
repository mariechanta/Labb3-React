import React from 'react';

const TeacherList = ({ teachers }) => {
  return (
    <div>
      <h2>Lärarlista</h2>
      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
