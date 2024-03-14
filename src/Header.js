import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   
     <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='#home'>Node Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="get">GetData</Nav.Link>
            <Nav.Link href="post">PostData</Nav.Link>
            <Nav.Link href="update">UpdateData</Nav.Link>
            <Nav.Link href="delete">DeleteData</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </div>
      
    
  );
}

export default Header;