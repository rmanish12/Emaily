import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../styles/Header.css'

import Stripes from './Stripes'

class Header extends React.Component {

    renderContent () {
        switch (this.props.auth) {
            case null:
                return

            case false:
                return <a href = "/auth/google" className = "login">Login With Google</a>

            default:
               
                let name = 'Welcome ' + this.props.auth.name
                return (                    
                    <Nav>
                        <Nav.Link><Stripes/></Nav.Link>
                        <Nav.Link style = {{fontWeight: 'bold', color: 'wheat'}}>Credits: {this.props.auth.credits}</Nav.Link>
                        <NavDropdown title={name} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/api/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>                    
                )
        }
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to = {this.props.auth ? '/surveys' : '/'} className = "logo">Emaily</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                    
                    {this.renderContent()}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)