import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Chat from './pages/Chat'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {

  const location = useLocation();
  const hideFooter = location.pathname === '/chat';

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'App bg-dark' : 'App'}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/chat" element={<Chat darkMode={darkMode} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer hide={hideFooter}/>
    </div>
  )
}

export default App
