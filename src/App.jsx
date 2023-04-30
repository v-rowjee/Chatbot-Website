import { Routes, Route, useLocation } from 'react-router-dom'
import { Sugar } from 'react-preloaders'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Chat from './pages/Chat'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {
  const enablePreoader = process.env.ENABLE_PRELOADER ?? false;
  const location = useLocation();
  const hideFooter = location.pathname.toLowerCase() === '/chat';

  function Preloader() {
    return (
      <Sugar
        color='rgb(61, 139, 253)'
        background="#fff"
        animation='fade'
        time={700} />
    )
  }

  return (
    <>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer hide={hideFooter} />
      </div>
      {enablePreoader && <Preloader />}
    </>
  )
}

export default App
