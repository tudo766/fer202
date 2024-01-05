
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    
    
    
    
    
    <Row>
        <Navbar style={{ backgroundColor: 'grey', }} data-bs-theme="dark" >
          <Container>
            
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{backgroundColor: 'green'}}>Home</Nav.Link>
              <Nav.Link href="#search">Search</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#Login" style={{backgroundColor: 'black'}}>Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
    </Row>
    

    
  );
}

export default App;


