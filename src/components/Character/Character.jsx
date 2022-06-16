import './Character.css'
import { Link, useParams } from "react-router-dom";
import Header from '../Header/Header'

import { useState, useEffect } from 'react'


const Character = () => {

  const { id } = useParams()
  const [game, setGame] = useState()

  const options = {
    method: 'GET',
    params: { id: id },
    headers: {
      'X-RapidAPI-Key': '2e640f6474msh9cc2b78e7a4f581p101ad8jsndf3bf14ec9b4',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
      .then(response => response.json())
      .then(jsonRes => setGame(jsonRes))
      .catch(err => console.error(err));
  }, [])


  return (
    <>
      <Header />

      <section>
        <div className="container">
          <div className="card-body m-2 text-center">

            <img className="img-fluid p-3  " src={game?.thumbnail} alt="Card image cap" />
            <div className="card-body">
              <Link to="/">
                <a className="card-title" />{game?.title}</Link>
              <p className="card-text">{game?.short_description}</p>
              <p className="card-text">{game?.developer}</p>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Character
                    // <p className="card-text">{game?["short_description"]}</p>
