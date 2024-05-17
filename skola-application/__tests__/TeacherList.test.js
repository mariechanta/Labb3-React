import { render, screen } from '@testing-library/react';
import TeacherList from '../Components/TeacherList';

test('renders teacher list component', async () => {
  render(<TeacherList />);
  const teacherElement = await screen.findByText(/Lärare 1/i); // Anpassa texten till vad som faktiskt finns i din TeacherList-komponent
  expect(teacherElement).toBeInTheDocument();
});
