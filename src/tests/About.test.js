import React from 'react';
import { screen, render } from '@testing-library/react'
import { About } from '../components';

describe('Teste o componente <About.js />', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    render(<About/>)
    
    const infoPokedex = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémons/i
    )

    expect(infoPokedex).toBeInTheDocument();
  });

  test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    render(<About/>)

    const heading = screen.getByRole('heading', {name: /about pokédex/i})

    expect(heading).toBeDefined();
  })

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const textOne = 'This application simulates a Pokédex,'
    + ' a digital encyclopedia containing all Pokémons';
    const textTwo = 'One can filter Pokémons by type,'
    + ' and see more details for each one of them';

    render(<About/>)

    const text1 = screen.getByText(textOne);
    expect(text1).toBeInTheDocument();
    const text2 = screen.getAllByText(textTwo)
    expect(text2).toBeDefined();
  })

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About/>)
    const urlImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png'
    
    const img = screen.getByRole('img', {name: /pokédex/i})

    expect(img).toHaveAttribute('src', urlImg);
  })

})
