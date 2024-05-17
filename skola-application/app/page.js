import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TeacherList from '../components/TeacherList';
import StudentList from '../components/StudentList';
import Classroom from '../components/Classroom';
import Assignment from '../components/Assignment';
import Calendar from '../components/Calendar';

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

export default MainPage
