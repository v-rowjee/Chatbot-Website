import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react';

export default function Navigation() {

  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("selectedTheme") || "light")

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
    localStorage.setItem("selectedTheme", "dark")
    setSelectedTheme("dark")
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
    localStorage.setItem("selectedTheme", "light")
    setSelectedTheme("light")
  }

  const toggleDarkMode = () => {
    selectedTheme === "dark" ? setLightMode() : setDarkMode()
  }

  useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode()
    } else {
      setLightMode()
    }
  }, [selectedTheme])

  const toggleElement = selectedTheme === "dark"
    ? <FaSun onClick={toggleDarkMode} className='text-light' title='Light Mode' role='button' />
    : <FaMoon onClick={toggleDarkMode} className='text-dark' title='Dark Mode' role='button' />

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed='top'
        expand="md"
        className='shadow-sm'
        variant={selectedTheme === "dark" ? 'dark' : 'light'}
        bg='navbar-color'
      >
        <Container>
          <Navbar.Brand href="/">FYP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/" className="mx-0 mx-md-4">Home</Nav.Link>
              <Nav.Link href="/chat" className="mx-0 mx-md-4">Chatbot</Nav.Link>
              <Nav.Link href="/#download" className="mx-0 mx-md-4">Download</Nav.Link>
              <Nav.Link href="/faq" className="mx-0 mx-md-4">FAQ</Nav.Link>
            </Nav>
            <Nav>
              {toggleElement}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
