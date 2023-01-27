import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navigation'
import Chat from './pages/Chat'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'App bg-dark' : 'App'}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/chat" element={<Chat darkMode={darkMode} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
