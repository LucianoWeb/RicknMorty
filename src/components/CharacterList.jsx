import React, { useEffect, useState } from 'react'
import Character from './Character';

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json()
            setCharacters(data.results)
        }
        fetchData()
    }, []);
    return (


        <div className="container p-5 text-dark">
            <h1 className='text-center text-white display-1 py-5'>Rick & Morty</h1>
            <div  className='row p-5 bg-dark rounded '>
                {characters.map(character => {
                    return (
                        <div key={character.id} className="col-12 bg-dark col-md-3">
                        <Character character={character} />
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default CharacterList;