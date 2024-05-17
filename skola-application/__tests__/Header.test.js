import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';

test('renders header component', () => {
  render(<Header />);
  const headerElement = screen.getByText(/header/i);
  expect(headerElement).toBeInTheDocument();
});
