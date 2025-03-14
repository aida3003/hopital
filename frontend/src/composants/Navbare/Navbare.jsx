

import { Navbar, Nav, Container } from 'react-bootstrap';



function Navbare() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-3">
          
          <img
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
            alt="Logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
          <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/patient">Voir des Patients</Nav.Link>
            <Nav.Link href="/medecin">Voir des Médecins</Nav.Link>
            <Nav.Link href="/rv">Voir mes rendez vous</Nav.Link>
            <Nav.Link href="/" className="btn btn-connect ms-lg-3">
              DECONNEXION
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbare;