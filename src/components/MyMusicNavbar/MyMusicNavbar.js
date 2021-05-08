import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function MyMusicNavbar(props) {
    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Navbar.Brand href="#home">My Music
            {/* <img src="music-logo-png.png" width="50" className="logo"/> */}
            </Navbar.Brand>
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
        </Navbar>
    );
}

export default MyMusicNavbar;