import React, { Component } from 'react';

let Navbar = require("react-bootstrap/lib/Navbar");
let NavItem = require("react-bootstrap/lib/NavItem");
let Nav = require("react-bootstrap/lib/Nav");
let NavbarHeader = require("react-bootstrap/lib/NavbarHeader")


class Head extends Component {
    render() {
        return (
            <Navbar className="navbar">
                <Nav>
                    <NavItem className="nav-list" eventKey={1} href="/main">Home</NavItem>
                </Nav>
                <NavbarHeader>
                    <Navbar.Brand className="navbar-brand">
                        <img href="/main" className="nav-logo" src="Images/logo.png" alt="logo" />
                    </Navbar.Brand>
                </NavbarHeader>
                <Nav>
                    <NavItem className="nav-list" eventKey={2} href="/progress">Progress</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Head;
