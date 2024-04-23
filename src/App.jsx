import './App.css'
import logo from './assets/logo-inverse-303x84.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Content4 from './Components/Content4';
import Footer from './Components/Footer';
import AOS from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    AOS.init({
      offset: 200, delay: 0, duration: 1000, easing: 'ease', once: false, mirror: false,
    });
  }, []);

  return (
    <>

      <div className='header nv-container'>

        <Navbar expand="lg" className='text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.392)', color: 'white', height: '8em', }}>
          <Container>
            <Navbar.Brand href="#home"><img style={{ width: '5em' }} src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto nv1">
                <Nav.Link  className='nv text-light' href="#home">Home</Nav.Link>
                <Nav.Link className='nv text-light' href="#link">About us</Nav.Link>
                <Nav.Link className='nv text-light' href="#link">Industries</Nav.Link>
                <Nav.Link className='nv text-light' href="#link">Equipment</Nav.Link>
                <Nav.Link className='nv text-light' href="#link">Contacts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className='nv-content container'>
          <h2 className='heading' data-aos="fade-right" style={{ color: 'white' }}>Welcome To Crafter Constructions</h2>
          <button data-aos="fade-right" className='bn'>Get in touch</button>
        </div>
      </div>

      <Content2 />
      <Content3 />
      <Content4 />
      <Footer />


    </>
  )
}

export default App
