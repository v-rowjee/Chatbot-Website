import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Navigation(props) {

  function toggleDarkMode() {
    props.setDarkMode(!props.darkMode)
  }

  const toggleElement = props.darkMode
    ? <FaSun onClick={toggleDarkMode} className='text-light' title='Light Mode' role='button' />
    : <FaMoon onClick={toggleDarkMode} className='text-dark' title='Dark Mode' role='button' />

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed='top'
        expand="md"
        className='shadow-sm'
        variant={props.darkMode ? 'dark' : 'light'}
        bg={props.darkMode ? 'dark-nav-blur' : 'nav-blur'}
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