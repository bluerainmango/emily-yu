import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main sections', () => {
  render(<App />);
  for (const header of ['ABOUT', 'RECOMMENDATIONS', 'SKILLS', 'EXPERIENCE', 'EDUCATION', 'CONTACT']) {
    expect(screen.getByRole('heading', { name: header })).toBeInTheDocument();
  }
});
