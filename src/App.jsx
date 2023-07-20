import { Routes, Route, useLocation } from 'react-router-dom'
import { Sugar } from 'react-preloaders'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Chat from './pages/Chat'
import Home from './pages/Home'
import Downlaod from './pages/Download';
import FAQ from './pages/FAQ'
import Feedback from './pages/Feedback'
import NotFound from './pages/NotFound'
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css'

function App() {
  const enablePreoader = localStorage.getItem("selectedTheme") === "dark" && process.env.ENABLE_PRELOADER === "true"
  const location = useLocation()
  const hideFooter = location.pathname.toLowerCase() === '/chat'

  function Preloader() {
    return (
      localStorage.getItem("selectedTheme") == 'light'
        ? <Sugar
          color='rgb(61, 139, 253)'
          background="#fff"
          animation='fade'
          time={700} />
        : <Sugar
          color='rgb(61, 139, 253)'
          background="#222"
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
          <Route path='/download' element={<Downlaod />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer hide={hideFooter} />
      </div>
      {enablePreoader && <Preloader />}
      <ToastContainer />
    </>
  )
}

export default App
