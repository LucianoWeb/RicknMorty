import { GiMale, GiFemale, GiHeartBeats, GiSkullCrossedBones, GiStaryu} from "react-icons/gi";
import { BsFillQuestionCircleFill, BsPersonBoundingBox, BsBugFill } from "react-icons/bs";
import { RiAliensFill } from "react-icons/ri";
import { FaOptinMonster, FaDragon, FaVirus, FaRobot } from "react-icons/fa";
import { GoPerson} from "react-icons/go";
import { MdPets } from "react-icons/md";
const DetailsGender = ({character}) => {
  if(character.gender === "Male"){
    return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">-Gender: {character.gender} <GiMale  style={{color: "#0d6efd"}} className='ms-3  bg-dark'/> </li>
  }else if (character.gender === "Female"){
    return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">-Gender: {character.gender} <GiFemale  style={{color: "#f022f7"}} className='ms-3  bg-dark'/> </li>
  }else if (character.gender === "Genderless"){
    return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">-Gender: {character.gender} <GiStaryu style={{color: "#e21754"}} className='ms-1  bg-dark'/> </li>
  }
  else{
    return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">-Gender: {character.gender} <BsFillQuestionCircleFill className='ms-3  bg-dark'/> </li>
  }
}
const DetailsSpecie = ({character}) => {
    if(character.species === "Human"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Specie: {character.species} <GoPerson style={{color: "#9ae9ff"}} className='ms-3  bg-dark'/> </li>
    }else if (character.species === "Alien"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Specie: {character.species} <RiAliensFill style={{color: "#23e101"}} className='ms-3  bg-dark'/> </li>
    }else if (character.species === "Humanoid"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Specie: {character.species} <BsPersonBoundingBox className='ms-3  bg-dark'/> </li>
    }else if (character.species === "Poopybutthole"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border fs-6 bg-dark text-white">- Specie: {character.species} <BsBugFill style={{color: "#7c9f00"}} className='bg-dark ms-2'/> </li>
    }else if (character.species === "Cronenberg"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Specie: {character.species} <FaOptinMonster style={{color: "#cc9d1b"}} className='bg-dark ms-1 '/> </li>
    }else if (character.species === "Mythological Creature"){
      return <li className="list-group-item border fs-6 bg-dark text-white">- Specie: {character.species} <FaDragon style={{color: "#c51e00"}} className='bg-dark ms-3  '/> </li>
    }else if (character.species === "Disease"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border fs-5 bg-dark text-white">- Specie: {character.species} <FaVirus style={{color: "#a400c5"}} className='bg-dark ms-3  '/> </li>
    }else if (character.species === "Animal"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border fs-5 bg-dark text-white">- Specie: {character.species} <MdPets style={{color: "#e6d711"}} className='bg-dark ms-3  '/> </li>
    }else if (character.species === "Robot"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border fs-5 bg-dark text-white">- Specie: {character.species} <FaRobot style={{color: "#59ffff"}} className='bg-dark ms-3  '/> </li>
    }
    else{
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Specie: {character.species} <BsFillQuestionCircleFill className='ms-3  bg-dark'/> </li>
    }
  }
  const DetailsStatus = ({character}) => {
    if(character.status === "Alive"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Status {character.status} <GiHeartBeats style={{color: "#f30410"}} className='ms-3  bg-dark'/> </li>
    }else if (character.status === "Dead"){
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Status {character.status} <GiSkullCrossedBones  className='ms-3  bg-dark'/> </li>
    }else{
      return <li className="list-group-item align-items-center d-flex justify-content-center border bg-dark text-white  fs-5">- Status {character.status} <BsFillQuestionCircleFill className='ms-3  bg-dark'/> </li>
    }
  }

export {DetailsGender, DetailsSpecie, DetailsStatus} ;
