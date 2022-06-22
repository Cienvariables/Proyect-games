import './Character.css'
import { Link, useParams } from "react-router-dom";
import Header from '../../components/Header/Header'
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
  }, [id])


  return (
    <>
      <Header />

      <section>

        <div className="card-body text-center">

          <h4 className="mytext1">{game?.title} </h4>
          <img className="img-fluid" src={game?.thumbnail} alt="Card image cap" />

          <div classname=" container " >
            <p className="mytext2">{game?.short_description}</p>
            <p className="mytext3">{game?.developer}</p>
          </div>

        </div>
      </section>

    </>
  )
}

export default Character
                    // <p className="card-text">{game?["short_description"]}</p>
