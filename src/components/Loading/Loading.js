import React from 'react'
import './styles.css'
import pokeball from './pokeball.png'

export const Loading = () => (
    <div className="loading">
        <img  src={pokeball} alt="pokeball" />
        <h1>Loading</h1>
    </div>
)
