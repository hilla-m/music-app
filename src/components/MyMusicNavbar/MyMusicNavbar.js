import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../MyMusicNavbar/MyMusicNavbar.css'
import logoImg from './logo.jpg';
import { GiMusicSpell } from "react-icons/gi";


function MyMusicNavbar({ activeUser , onLogout }) {
        return (
        <Navbar variant="dark" className="navbar navbar-bg" expand="lg">
            {/* <Navbar.Brand href="#home">
            <img src={logoImg} width="60" className="logo"/>
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav-display">
                <Nav className="mr-auto">
                < Nav.Link href="#home"><img src={logoImg} width="60" className="logo"/></Nav.Link>
                    {activeUser ? < Nav.Link className="navbar-link" href="#all-playlists">Playlists</Nav.Link> : null}
                    {activeUser ? <Nav.Link className="navbar-link" href="#albums">Albums</Nav.Link> : null}
                    {activeUser ? <Nav.Link className="navbar-link" href="#artists">Artists</Nav.Link> : null}
                </Nav>
                <Nav className="ml-auto">
                    {!activeUser ? <Nav.Link href="#login">Login</Nav.Link> : null}
                    {!activeUser ? <Nav.Link href="#signup">Signup</Nav.Link> : null}
                    {activeUser ? <Navbar.Text> Hi {activeUser.name}!</Navbar.Text>: null}
                    {activeUser ? <Nav.Link href="#" onClick= {() => onLogout()}>Logout</Nav.Link> : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default MyMusicNavbar;