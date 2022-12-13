import React, { useEffect, useState } from 'react'
import Character from './Character';
import Navigation from './Navigation';

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json()
            setCharacters(data.results)
        }
        fetchData()
    }, [page]);
    return (

<>
        <div className="container p-md-5 p-1 text-dark">
            <h1 className='text-center text-white display-1 py-5'>Rick & Morty</h1>
            <Navigation page={page} setPage={setPage}/>
            <div  className='row p-md-5 p-1 bg-dark rounded '>
                {characters.map(character => {
                    return (
                        <div key={character.id} className="col-12 bg-dark col-lg-3">
                        <Character character={character} />
                        </div>
                    )
                })}
            </div>
            
        </div>
        <Navigation page={page} setPage={setPage}/>
        </>
    )
   
}

export default CharacterList;