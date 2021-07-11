import React, { PureComponent } from 'react'
import {Navbar,Nav}from 'react-bootstrap'

import {Link}from 'react-router-dom'

export default class NavbarComponent extends PureComponent {
    render() {
        return (
            <Navbar bg='light' expand='sm'>
                
                <Navbar.Brand as={Link}>
                     F-Drive
                </Navbar.Brand>
            <Nav>

            <Nav.Link as={Link} to='/user'>
                Profile
            </Nav.Link>

            </Nav>

            </Navbar>
        )
    }
}
