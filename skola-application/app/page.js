import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import TeacherList from '../Components/TeacherList';
import StudentList from '../Components/StudentList';
import Classroom from '../Components/Classroom';
import Assignment from '../Components/Assignment';
import Calendar from '../Components/Calendar';

const MainPage = () => {
  const teachers = [
    { id: 1, name: 'Lärare 1' },
    { id: 2, name: 'Lärare 2' },
  ];

  const students = [
    { id: 1, name: 'Elev 1' },
    { id: 2, name: 'Elev 2' },
  ];

  const classroom = {
    number: '101',
    teacher: 'Lärare 1',
  };

  const assignment = {
    title: 'Uppgift 1',
    description: 'Beskrivning av uppgift 1',
  };

  const events = [
    { id: 1, title: 'Händelse 1', date: '2024-05-17' },
    { id: 2, title: 'Händelse 2', date: '2024-05-18' },
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <TeacherList />
      <StudentList />
      <Classroom classroom={classroom} />
      <Assignment assignment={assignment} />
      <Calendar events={events} />
      <Footer />
    </div>
  );
};

export default MainPage;
