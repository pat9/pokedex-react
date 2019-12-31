import React from 'react'
import './styles.css'

const Header = () => {
    return(
        <header className="header">
            <div className="header-menu-button">
                <i className="fa fa-bars"></i>
            </div>
            <div className="header-logo">
                Pokedex
            </div>
        </header>
    )
}

export default Header