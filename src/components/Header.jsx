import React, { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="Header">
            <p>Cambia el estilo de la aplicación</p>
            <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Ligth Mode'}</button>
        </div>
    )
}

export default Header
