import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

function Navigation() {
    return (
        <Navbar className="border-bottom">
            <Container>
                <Navbar.Brand href="/"><strong>Intramural<span class='text-info'>Hub</span></strong></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Button href='/' variant="outline-primary" className='me-1'>Log In</Button>
                    <Button href='/' variant="primary">Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;