import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main sections', () => {
  render(<App />);
  for (const heading of [
    /I sweat the details/,
    "Two things I'm known for",
    'What my teammates say',
    /A teammate you can count on/,
    /Individual or team projects/,
    /I love learning/,
    'Where it all started',
    /Let's build something/,
  ]) {
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  }
});
