//Student List test

import { render, screen } from '@testing-library/react';
import StudentList from './StudentList';

test('renders student list', () => {
  render(<StudentList />);
  const studentListElement = screen.getByTestId('student-list');
  expect(studentListElement).toBeInTheDocument();
});

test('displays correct number of students', () => {
  const students = ['Student 1', 'Student 2', 'Student 3'];
  render(<StudentList students={students} />);
  const studentItems = screen.getAllByTestId('student-item');
  expect(studentItems).toHaveLength(students.length);
});

test('displays correct name for each student', () => {
  const students = ['Student 1', 'Student 2', 'Student 3'];
  render(<StudentList students={students} />);
  const studentItems = screen.getAllByTestId('student-item');
  studentItems.forEach((item, index) => {
    expect(item).toHaveTextContent(students[index]);
  });
});
