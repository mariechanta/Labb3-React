//This is LoginForm test
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('renders login form with username and password fields', () => {
    render(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText('Användarnamn');
    const passwordInput = screen.getByPlaceholderText('Lösenord');
    const loginButton = screen.getByText('Logga in');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
