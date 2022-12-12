import styled from 'styled-components';
import {DetailsGender, DetailsSpecie, DetailsStatus} from "./Details";
const Character = ({ character }) => {
    return (
        <div className="card card-body  bg-primary my-3 text-center">
            <Name className="mb-2 p-1 text-white">{character.name}</Name>
            <img className="img-fluid rounded-top" src={character.image} alt={character.name} />
            <ul className="list-group list-group-flush bg-primary">
                <DetailsStatus character={character}/>
                <DetailsGender character={character}/>
                <DetailsSpecie character={character}/>
               
            </ul>
        </div>
    );
}
const Name = styled.h3`
height: 2.9rem;
overflow: hidden;
border: 2px solid white;
font-weight: 900;

`;
export default Character;
