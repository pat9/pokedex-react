import React from 'react';
import './styles.css'

export const PokeDetail = ({ name, id, sprites }) => (
    <div className="pokedetail">
        <img className="pokeimg" width="125" src={sprites.front_default} alt={name} />
        <h1 className="pokename">{name}</h1>
        <p className="pokenum">No. {('00'+id).slice(-3)}</p>
    </div>
)