import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Form, Button, NavDropdown, Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
    
  return (
    
    <div>
 {[false].map((expand) => (
<Navbar  key={expand} expand={expand} data-bs-theme="dark" bg='primary'>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ fontSize: 30 }}>
            <img
              alt=""
              src={require('../assets/mathHelpLogo.png')}
              width="50"
              height="50"
              className="d-inline-block align-top"
              style={{ marginRight: 15, marginLeft: 35 }}
            />{' '}
            Mathhelp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Welcome 👋
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home 🏠</Nav.Link>
                  <Nav.Link href="#action2">Logout ➡️</Nav.Link>
                </Nav>
      
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
       ))}

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginBottom: -120, marginTop: 70}}>
  <img
  src={require('../assets/IGCSEHeader1600x400.jpeg')}
  style={{ borderRadius: 20 }}
  />
  </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', marginBottom: -160}}>
        <h1>Home</h1>
     </div>
     
     <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', fontSize: 15, textAlign: 'center', width: 800, marginLeft: 350}}> 
        This is where you can upload and view other students like you who have attmpeted cambirdge IGCSE (0580) math past papers. This will help you gain a better understanding of how a paper is attempted from a students perspective</p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginBottom: -100, marginTop: 70}}>
        <Button variant="success" onClick={() => navigate('/uploadExam')}>Upload Your Attempted Past Papers Here 📝</Button>
  </div>

     </div>
  )
}

export default Home