// components/StudentList.tsx
import React, { useEffect, useState } from 'react';

interface Student {
  id: number;
  name: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
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
