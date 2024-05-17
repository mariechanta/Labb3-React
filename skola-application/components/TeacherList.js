// TeacherList.js
import React, { useEffect, useState } from 'react';
import { useClient } from 'next/client'; // Importera useClient från next/client
import axios from 'axios';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const client = useClient(); // Använd useClient här

  useEffect(() => {
    axios.get('https://api.example.com/teachers') // Exempel-URL, byt ut till riktig URL
      .then(response => {
        setTeachers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the teachers!", error);
      });
  }, [client]); // Lägg till client som en beroende här

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
