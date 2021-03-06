import './PersonalCard.css'
import { Link } from "react-router-dom";

const PersonalCard = ({ title, thumbnail, id }) => {
  return (

    <section>
      <div className="card">
        <div className="card-title">
          <div className="col-sm-10 col-md-12 col-lg-12">
            <div className="card hoverable text-center">

              <img className="img-fluid text-center" src={thumbnail} alt="Card image cap" />
              <div className="card-body">
                <Link to={`/character/${id}`}>
                  <a className="card-text" />{title}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PersonalCard


