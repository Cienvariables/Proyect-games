import { Route, Routes } from "react-router-dom";
import './App.css'
//Components
import PersonalCard from './components/PersonalCard/PersonalCard'
import Character from './components/Character/Character';
// Pages
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='container'>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="character/:id" element={<Character />} />
        </Routes>
      </main>

    </div>

  )
}

export default App
