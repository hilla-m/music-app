import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../MyMusicNavbar/MyMusicNavbar.css'

function MyMusicNavbar(props) {
    return (
        <Navbar variant="dark" className="navbar navbar-bg" expand="lg">
            <Navbar.Brand href="#home">My Music
            {/* <img src="music-logo.jpg" width="40" className="logo"/> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav-display">
                <Nav className="mr-auto">
                    <Nav.Link href="#all-playlists">Playlists</Nav.Link>
                    <Nav.Link href="#albums">Albums</Nav.Link>
                    <Nav.Link href="#artists">Artists</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#signup">Signup</Nav.Link>
                    <Nav.Link href="#">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyMusicNavbar;