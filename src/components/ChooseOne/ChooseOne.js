import React from 'react'
import './styles.css'
import pokeball from './pokeball.png'

export const ChooseOne = () => (
    <div className="chooseone">
        <img className="pokeball" src={pokeball} alt="pokeball" />
        <h1>Choose One</h1>
    </div>
)