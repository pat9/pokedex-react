import React from 'react'
import './styles.css'

export const SideMenu = ({ children }) => (
    <nav className="sidemenu">
        <ul>
            { children }
        </ul>
    </nav>
)