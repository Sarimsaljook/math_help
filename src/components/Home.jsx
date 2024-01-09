import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Button, Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { ref, listAll } from 'firebase/storage';
import { ref as databaseRef, onValue } from 'firebase/database';

import { database, storage } from '../firebase';

const Home = () => {

  const navigate = useNavigate();
  const [papers, setPapers] = useState([]);

  const [studentName, setStudentName] = useState('');

  useEffect(() => {

    let isMounted = true; // Variable to track component mount status
    let processedPapers = 0;

    const fetchData = async () => {
      try {
        const storageRef = ref(storage, '/PastPapersStorage');

        const uniqueStudentIds = new Set();

         listAll(storageRef).then((res) => {

           res.items.forEach((item) => {
            const paperId = item.name;
            const paperRef = databaseRef(database, `uploadedPapers/${paperId}`);

            onValue(paperRef, (snapshot) => {

              if (!isMounted) return; // Exit if component is unmounted

              const data = snapshot.val();

              setPapers((prevPapers) => [...prevPapers, { id: paperId, data }]);

              try {
                const userRef = databaseRef(database, `users/${data.student}`);
        
                onValue(userRef, (snapshot) => {
                  const userData = snapshot.val();
        
                  if (userData && userData.name) {
                    setStudentName(userData.name);
                  } else {}
                });
        
              } catch (error) {
                console.error('Error fetching student name:', error);
              }
           

            });

          });
        }).catch((err) => console.log(err));
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

      fetchData();

      // Cleanup function to unsubscribe from Firebase event listener
  return () => {
    isMounted = false; // Set component as unmounted
  };
    }, []);

  const openPdfInNewTab = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  
    
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
                  <Nav.Link href="/">Logout ➡️</Nav.Link>
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
        This is where you can upload and view other students like you who have attmpeted cambdge IGCSE (0580) math past papers. This will help you gain a better understanding of how a paper is attempted from a students perspective</p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginBottom: -100, marginTop: 40}}>
        <Button variant="success" onClick={() => navigate('/uploadExam')}>Upload Your Attempted Past Papers Here 📝</Button>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 150 }}>
        <h2 style={{ color: 'crimson' }}>Uploaded Solved Math Past Papers</h2>
        <div style={{ overflowY: 'auto', maxHeight: '400px', width: '80%', marginTop: 20 }}>
          {papers.map((paper) => (
            <div
              key={paper.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '15px',
                margin: '10px',
                cursor: 'pointer',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
              }}
              onClick={() => openPdfInNewTab(`https://firebasestorage.googleapis.com/v0/b/math-help-ab174.appspot.com/o/PastPapersStorage%2F${paper.id}?alt=media&token=6e477dfe-3b3b-47b8-a98a-bf11e1613722`)}
            >
              <p>{`Session: ${
                paper.data.paperSession === 'M/J' ? 'May/June' :
                paper.data.paperSession === 'O/N' ? 'October/November' :
                paper.data.paperSession === 'F/M' ? 'Febuary/March' :
                'Unknown Session'
                }, Year: ${paper.data.paperYear}, Variant: ${paper.data.paperVariant}`}</p>
              <p>{`Solved By: ${studentName}`}</p>
            </div>
          ))}
        </div>
      </div>
  
     </div>
  )
}

export default Home