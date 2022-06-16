import './PersonalCard.css'
import { Link } from "react-router-dom";

const PersonalCard = ({ title, short_description, thumbnail, id }) => {
  return (

    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-12 col-lg-12">
            <div className="card hoverable text-center">

              <img className="img-fluid text-center" src={thumbnail} alt="Card image cap" />
              <div className="card-body">
                <Link to={`/character/${id}`}>
                  <a className="card-title" />{title}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PersonalCard


