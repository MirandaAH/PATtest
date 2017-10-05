import React, { Component } from 'react';
let Navbar = require("react-bootstrap/lib/Navbar");
let Header = require("react-bootstrap/lib/NavbarHeader")
let NavItem = require("react-bootstrap/lib/NavItem");
let Nav = require("react-bootstrap/lib/Nav");


class Head extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">P.A.T</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Progress</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Head;
