import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import HomePage from '../../../pages/HomePage';

const Nav = () => {

  return (
    <nav class="container-fluid m-1 navbar navbar-expand-xl navbar-light bg-light row row-cols-2">

      <ul class="navbar-nav  mb-xl-0 row row-cols-1">
        <li class="nav-item  p-0 col">
          <a class="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item p-0 col">
          <a class="nav-link " href="#">Link</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <Link to="/">
        <button class="btn btn-outline-success">Home</button>
      </Link>

    </nav>

  )
}

export default Nav
