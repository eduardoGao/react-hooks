import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    // const [theme, setTheme] = useContext(ThemeContext)

    const handleClick = () => {
        setDarkMode(!darkMode);
        // theme === 'Light' ? setTheme('Dark') : setTheme('Light')
    }

    return (
        <div className="Header">
            <h1>Rick and Morty</h1>
            <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Ligth Mode'}</button>
        </div>
    )
}

export default Header
