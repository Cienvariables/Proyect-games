import Header from '../components/Header/Header.jsx'
import { useState, useEffect } from 'react'
//Components
import PersonalCard from '../components/PersonalCard/PersonalCard.jsx'

export default function HomePage() {
  const [games, setGames] = useState([])
  const [filter, setFilter] = useState('')

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
    <>
      <section>
        <Header filter={filter} setFilter={setFilter} />
        <div>
          {
            games.length === 0 ?
              <h1>No hay juegos</h1>
              :
              <div className='wrapper'>
                {
                  games
                    .filter(game => game.title.toLowerCase().includes(filter.toLowerCase()))
                    .map(games => (
                      <PersonalCard className='card' key={games.id} title={games.title} publisher={games.publisher} release_date={games.release_date} thumbnail={games.thumbnail} id={games.id} />
                    )
                    )
                }
              </div>
          }
        </div>
      </section>
    </>
  )
}
