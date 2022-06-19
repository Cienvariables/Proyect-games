import { Route, Routes } from "react-router-dom";
import './App.css'
//Components
import Character from './pages/Character/Character';
// Pages
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="character/:id" element={<Character />} />
    </Routes>
  )
}

export default App
