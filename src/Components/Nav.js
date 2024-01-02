import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark" className="navbar_custom">
                <Container>
                    <Nav className="me-auto" >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/features">Features</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;