import { GiMale, GiFemale, GiHeartBeats, GiSkullCrossedBones} from "react-icons/gi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { RiAliensFill } from "react-icons/ri";
import { GoPerson} from "react-icons/go";
const DetailsGender = ({character}) => {
  if(character.gender === "Male"){
    return <li className="list-group-item border bg-dark text-white  fs-5">-Gender: {character.gender} <GiMale  style={{color: "#0d6efd"}} className='ms-3  bg-dark'/> </li>
  }else if (character.gender === "Female"){
    return <li className="list-group-item border bg-dark text-white  fs-5">-Gender: {character.gender} <GiFemale  style={{color: "#f022f7"}} className='ms-3  bg-dark'/> </li>
  }else{
    return <li className="list-group-item border bg-dark text-white  fs-5">-Gender: {character.gender} <BsFillQuestionCircleFill className='ms-3  bg-dark'/> </li>
  }
}
const DetailsSpecie = ({character}) => {
    if(character.species === "Human"){
      return <li className="list-group-item border bg-dark text-white  fs-5">- Specie: {character.species} <GoPerson className='ms-3  bg-dark'/> </li>
    }else if (character.species === "Alien"){
      return <li className="list-group-item border bg-dark text-white  fs-5">- Specie: {character.species} <RiAliensFill style={{color: "#23e101"}} className='ms-3  bg-dark'/> </li>
    }else{
      return <li className="list-group-item border bg-dark text-white  fs-5">- Specie: {character.species} <BsFillQuestionCircleFill className='ms-3  bg-dark'/> </li>
    }
  }
  const DetailsStatus = ({character}) => {
    if(character.status === "Alive"){
      return <li className="list-group-item border bg-dark text-white  fs-5">- Status {character.status} <GiHeartBeats style={{color: "#f30410"}} className='ms-3  bg-dark'/> </li>
    }else if (character.status === "Dead"){
      return <li className="list-group-item border bg-dark text-white  fs-5">- Status {character.status} <GiSkullCrossedBones  className='ms-3  bg-dark'/> </li>
    }else{
      return <li className="list-group-item border bg-dark text-white  fs-5">- Status {character.status} <BsFillQuestionCircleFill className='ms-3  bg-dark'/> </li>
    }
  }

export {DetailsGender, DetailsSpecie, DetailsStatus} ;
