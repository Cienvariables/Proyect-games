import { useState } from 'react';
import './Nav.css';

import { Link, useNavigate } from "react-router-dom";

const Nav = ({ filter, setFilter }) => {
  const navigate = useNavigate()
  const [random, setRandom] = useState(0)

  const handleRandomButton = () => {
    const randomNumber = Math.floor(Math.random() * 400) + 1
    setRandom(randomNumber)
    navigate(`/character/${randomNumber}`)
  }

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-header ">
        <Link to="/" > Home </Link>
        <button
          onClick={handleRandomButton} className="btn btn-info btn-refresh"> Aleatorio
        </button>
      </div>

      <div className="col-sm-3 col-md-3 ">
        <div className="ui-widget">
          <form id="custom-search-form" className="navbar-form" role="search" action="search" method="post">
            <div className="input-group">
              <input type="text" name="search" id="search" className="form-control" placeholder="Search"
                onChange={(event) => setFilter(event.target.value)} />

              <div className="input">
                <button className="btn" type="submit"></button>
              </div>
            </div>
          </form>
        </div>
      </div >

      <div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login">Log In </Link></li>
          <li><Link to="/register">Register </Link></li>
        </ul>
      </div>
    </nav >

  )
}

export default Nav
