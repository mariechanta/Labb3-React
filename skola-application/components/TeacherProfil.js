
import React from 'react';

const TeacherProfile = ({ teacher }) => {
  return (
    <div>
      <h2>{teacher.name}</h2>
      <p>{teacher.bio}</p>
    </div>
  );
};

export default TeacherProfile;
