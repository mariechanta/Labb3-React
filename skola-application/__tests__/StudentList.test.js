import { render, screen } from '@testing-library/react';
import StudentList from '../Components/StudentList';

test('renders student list component', async () => {
  render(<StudentList />);
  const studentElement = await screen.findByText(/Elev 1/i); // Anpassa texten till vad som faktiskt finns i din StudentList-komponent
  expect(studentElement).toBeInTheDocument();
});
