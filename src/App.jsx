import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
//Components
import Header from './components/Header/Header'
import PersonalCard from './components/PersonalCard/PersonalCard'
// Pages
import HomePage from './pages/HomePage'

const NOMBRE = 'REACT'

function App() {
  const [games, setGames] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e640f6474msh9cc2b78e7a4f581p101ad8jsndf3bf14ec9b4',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
      .then(response => response.json())
      .then(jsonRes => setGames(jsonRes))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='container'>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <section className='container'>
        {
          games.length === 0 ?
            <h1>No hay juegos</h1>
            :
            <div className='wrapper '>
              {
                games.map(games => <PersonalCard className='card' key={games.id} title={games.title} publisher={games.publisher} release_date={games.release_date} thumbnail={games.thumbnail} />)
              }
            </div>
        }
      </section>

    </div >

  )
}

export default App
