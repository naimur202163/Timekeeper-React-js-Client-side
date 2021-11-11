import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img className="logo-img" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper-b_150x.png?v=1559116234" /></Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/ourservices">Our Services</Nav.Link>
                            <Nav.Link as={Link} to="/login">About</Nav.Link>
                            <Nav.Link as={Link} to="/userorders">My-Orders</Nav.Link>
                            <Nav.Link as={Link} to="/register">Regiser</Nav.Link>
                            {
                                user?.email ?
                                    <Nav.Link onClick={logout} >LogOut</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;