import React from 'react'
import Header from './components/Header/Header'
import { PokemonList } from './containers/PokemonList/PokemonList'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonList /> 
    </div>
  );
}

export default App