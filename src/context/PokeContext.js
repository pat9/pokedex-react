import React, { createContext, useState } from 'react'

export const PokeContext = createContext(null)

export const PokeProvider = ({ children }) => {
    const [pokemonSelected, setPokemonSelected] = useState({})

    const value = {
        pokemonSelected, 
        selectPokemon: pokemon => {
            setPokemonSelected(pokemon)
        } 
    }

    return (
        <PokeContext.Provider value={value}>
            { children }
        </PokeContext.Provider>
    )

}