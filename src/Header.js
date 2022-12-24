import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// rsf for  functional 
function Header(props) {
    return (
        <div>
                 <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Ecomerce</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Products</Nav.Link>
                                <Nav.Link href="#link">AboutUs</Nav.Link>
                                <Nav.Link href="#link">Contact Us</Nav.Link>
                                <Nav.Link href="#link">{props.title}</Nav.Link>
                                <img src="https://tse2.mm.bing.net/th?id=OIP.aVNmxPweH37Seo0fPQH80QHaF7&pid=Api&P=0"></img>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
        </div>
    );
}

export default Header;