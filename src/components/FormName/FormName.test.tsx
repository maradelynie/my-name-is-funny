import { render, screen } from '@testing-library/react';
import FormName from './index';

test('if renders form content', () => {
  render(<FormName />);

  const labelElement = screen.getByText(/If you think your name is funny, send it:/i);
  const placeholderElement = screen.getByPlaceholderText(/your name here/i);
  const buttonElement = screen.getByRole('button')

  expect(labelElement).toBeInTheDocument();
  expect(placeholderElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
