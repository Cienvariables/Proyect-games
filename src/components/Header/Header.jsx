
import React from 'react'
import './Header.css'
import Nav from "./Nav/Nav";

const Header = ({ filter, setFilter }) => {
  return (
    <Nav filter={filter} setFilter={setFilter} />
  )
}

export default Header