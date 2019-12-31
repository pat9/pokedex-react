import React from 'react'
import './styles.css';

export const PokemonItem = ({name, onClick}) => {
    return (
        <li className="pokeitem" onClick={onClick}> 
            {name}
        </li>
    )
}