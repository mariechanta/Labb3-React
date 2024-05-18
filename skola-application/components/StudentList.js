// components/StudentList.js
import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Hämta data från extern sida, t.ex. en REST API eller GraphQL
    fetch('https://api.example.com/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
