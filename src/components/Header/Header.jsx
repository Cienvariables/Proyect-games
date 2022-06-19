
import React from 'react'
import './Header.css'
import Nav from "./Nav/Nav";

// const myfirstProps = 'Del hijo al padre';
// Una cons para buscar Title
const Header = ({ filter, setFilter }) => {
  return (
    <Nav filter={filter} setFilter={setFilter} />
  )
}

export default Header