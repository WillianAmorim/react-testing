import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se página contém um texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const h2 = screen.getByRole('heading', { name: /page requested not found/i });
    const imageError = screen.getByAltText(/pikachu crying/i);
    expect(h2).toBeInTheDocument();
    expect(imageError).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
