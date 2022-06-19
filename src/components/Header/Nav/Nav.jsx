import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import HomePage from '../../../pages/HomePage';

const Nav = ({ filter, setFilter }) => {

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-header ">
        <Link to="/"><span className="glyphicon glyphicon-edit" /> Home </Link>
        <Link to="/?id"><span className="glyphicon glyphicon-edit" /> Aleatorio </Link>
      </div>

      <div className="col-sm-3 col-md-3 ">
        <div className="ui-widget">
          <form id="custom-search-form" className="navbar-form" role="search" action="search" method="post">
            <div className="input-group">
              <input type="text" name="search" id="search" className="form-control" placeholder="Search"
                onChange={(event) => setFilter(event.target.value)}
              />

              <div className="input-group-btn">
                <button className="btn" type="submit"><i className="glyphicon glyphicon-search"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/"><span className="glyphicon glyphicon-edit" /> Log In </Link></li>
          <li><Link to="/"><span className="glyphicon glyphicon-edit" /> Log Out </Link></li>
        </ul>
      </div>
    </nav >

  )
}

export default Nav
