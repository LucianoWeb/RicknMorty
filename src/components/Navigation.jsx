import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Navigation = ({page, setPage}) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <button onClick={() => setPage(page-1)} className="btn fs-5 mx-3 mb-2 btn-primary d-flex align-items-center"><GrFormPrevious className="bg-white me-2"/> Previous </button>
      <button onClick={() => setPage(page+1)} className="btn fs-5 mx-3 mb-2 btn-primary d-flex align-items-center">Next <GrFormNext className="bg-white ms-2"/></button>
    </div>
  )
}

export default Navigation
