import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('Teste se o topo contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });

    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página inicial', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });

    userEvent.click(linkHome);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
  });

  test('Teste se a aplicação é redirecionada para a página de About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });

    userEvent.click(linkAbout);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/about');
  });

  test('Teste se a aplicação é redirecionada para Pokémons Favoritados', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /favorite/i });

    userEvent.click(linkFavorite);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/favorites');
  });

  test('Teste se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/anyPage');
    const pageNotFound = screen.getByRole('heading',
      { name: /Page requested not found/i });

    expect(pageNotFound).toBeDefined();
  });
});
