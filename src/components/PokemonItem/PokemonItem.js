import React from 'react'
import './styles.css';

export const PokemonItem = ({name, url}) => {
    return (
        <li className="pokeitem"> 
            <a href="#" >
                {name}
            </a>
        </li>
    )
}