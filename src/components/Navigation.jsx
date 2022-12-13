
const Navigation = ({page, setPage}) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <button onClick={() => setPage(page-1)} className="btn mx-3 mb-2 btn-primary"> Previous</button>
      <button onClick={() => setPage(page+1)} className="btn mx-3 mb-2 btn-primary">Next</button>
    </div>
  )
}

export default Navigation
