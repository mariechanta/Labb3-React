
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/teachers') // Exempel-URL, byt ut till riktig URL
      .then(response => {
        setTeachers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the teachers!", error);
      });
  }, []);

  return (
    <div>
      <h2>Lärare</h2>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
