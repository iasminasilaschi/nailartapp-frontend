import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the main page with a Register form', () => {
  render(<App />);
  const headingElement = screen.getByText(/register/i);
  expect(headingElement).toBeInTheDocument();
});
