import { Route, Routes } from "react-router-dom";
import './App.css'
//Components
import Character from './pages/Character/Character';
// Pages
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


function App() {

  return (
    <>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="character/:id" element={<Character />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
