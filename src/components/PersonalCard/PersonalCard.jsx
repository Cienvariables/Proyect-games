import './PersonalCard.css'

const PersonalCard = ({ title, publisher, release_date, thumbnail }) => {
  return (
    <div>
      <div className='boxes'>
        <div>
          <img
            src={thumbnail}
            alt={title}
          ></img>
          <div id="card-body" className="card-body row text-center">
            <p className="card-text font-weight-bold h4">{title} ({release_date})</p>
            <div className="card-bottom m-2">
              <div className="btn items-center m-0">
                <button type="button" className="btn btn-outline-secondary btn-lg" onClick={(e, i) => props.onClick(e, props.imdbID)}>Detalles</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default PersonalCard

// y boton
// <a href="#" class="btn btn-primary">Go somewhere</a>