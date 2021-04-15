import { render, screen } from '@testing-library/react';
import ListName from './index';

test('render 30 names of the list', () => {
  render(<ListName />);

  const listOfNames = screen.getAllByRole('listitem')

  expect(listOfNames).toHaveLength(30)
});
