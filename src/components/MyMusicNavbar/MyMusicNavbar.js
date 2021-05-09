import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../MyMusicNavbar/MyMusicNavbar.css'

function MyMusicNavbar({ activeUser , onLogout }) {
        return (
        <Navbar variant="dark" className="navbar navbar-bg" expand="lg">
            <Navbar.Brand href="#home">My Music
            {/* <img src="music-logo.jpg" width="40" className="logo"/> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav-display">
                <Nav className="mr-auto">
                    {activeUser ? < Nav.Link href="#all-playlists">Playlists</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#albums">Albums</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#artists">Artists</Nav.Link> : null}
                </Nav>
                <Nav className="ml-auto">
                    {!activeUser ? <Nav.Link href="#login">Login</Nav.Link> : null}
                    {!activeUser ? <Nav.Link href="#signup">Signup</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#" onClick= {() => onLogout()}>{activeUser.fullName} Logout</Nav.Link> : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default MyMusicNavbar;