import { render, screen } from '@testing-library/react';
import App from './index';

test('renders logo title', () => {
  render(<App />);
  const linkElement = screen.getByText(/My name is Funny/i);
  expect(linkElement).toBeInTheDocument();
});
