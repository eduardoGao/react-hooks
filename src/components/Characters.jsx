import React, { useState, useEffect } from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])
    console.log(characters)
    
    return (
        <div>
            {characters.map((character) => (
                <div key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default Characters
