import { Routes, Route, useLocation } from 'react-router-dom'
import { Sugar } from 'react-preloaders'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Chat from './pages/Chat'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {

  const location = useLocation();
  const hideFooter = location.pathname.toLowerCase() === '/chat';

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
      <Sugar 
        color='#fff' 
        background="rgb(61, 139, 253)"
        animation='fade'
        time={750} />
    </>
  )
}

export default App
