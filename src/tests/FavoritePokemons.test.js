import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found,', () => {
    renderWithRouter(<FavoritePokemons />);
    const noPokemon = screen.getByText(/no favorite pokemon found/i);
    expect(noPokemon).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);

    const yesPokemon = screen.getAllByAltText(/is marked as favorite/i);
    yesPokemon.forEach((favoritePok) => expect(favoritePok).toBeInTheDocument);
  });
});
