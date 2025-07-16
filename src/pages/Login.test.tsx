import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login heading', () => {
  render(<Login />);
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
});
