import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

function LoggedInNavbar() {
    return (
        <Navbar className="border-bottom" expand="sm">
            <Container>
                {/* make this brand specific to the organization */}
                <Navbar.Brand href="/app"><strong>Intramural<span className='text-info'>Hub</span></strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="loggedInNav" />
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        loggedInNav
                    >
                        {/* more links here */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default LoggedInNavbar;