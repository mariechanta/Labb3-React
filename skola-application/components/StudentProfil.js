
import React from 'react';

const StudentProfile = ({ student }) => {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
    </div>
  );
};

export default StudentProfile;
