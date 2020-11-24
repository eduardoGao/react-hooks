import React, { useState, useContext } from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './App.css';
import ThemeContext from './context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('Light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App'>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
