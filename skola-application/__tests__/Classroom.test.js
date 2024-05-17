import { render, screen } from '@testing-library/react';
import Classroom from '../Components/Classroom';

const classroom = {
  number: '101',
  teacher: 'Lärare 1',
};

test('renders classroom component', () => {
  render(<Classroom classroom={classroom} />);
  const classroomElement = screen.getByText(/101/i); // Anpassa texten till vad som faktiskt finns i din Classroom-komponent
  const teacherElement = screen.getByText(/Lärare 1/i); // Anpassa texten till vad som faktiskt finns i din Classroom-komponent
  expect(classroomElement).toBeInTheDocument();
  expect(teacherElement).toBeInTheDocument();
});
