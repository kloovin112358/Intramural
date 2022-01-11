import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

function LoggedOutNavbar() {
    return (
        <Navbar className="border-bottom" expand="sm">
            <Container>
                <Navbar.Brand href="/"><strong>Intramural<span className='text-info'>Hub</span></strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="loggedOutNav" />
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        loggedOutNav
                    >
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Button href='/login' variant="outline-primary" className='me-1'>Log In</Button>
                    <Button href='/signup' variant="primary">Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default LoggedOutNavbar;