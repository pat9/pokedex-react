import React from 'react'
import Header from './components/Header/Header'
import { PokemonList } from './containers/PokemonList/PokemonList'
import './App.css'
import { PokeProvider } from './context/PokeContext';
import { PokeMain } from './containers/PokeMain/PokeMain';

function App() {
  return (
    <div className="App">
      <PokeProvider>
          <Header />
          <PokemonList /> 
          <PokeMain />
      </PokeProvider>
    </div>
  );
}

export default App