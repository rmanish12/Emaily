import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/Header.css'

import Stripes from './Stripes'

class Header extends React.Component {

    renderContent () {
        switch (this.props.auth) {
            case null:
                return

            case false:
                return <a href = "/auth/google">Login With Google</a>

            default:
                // return <a href = "/api/logout">Welcome {this.props.auth.name}</a>
                let name = 'Welcome ' + this.props.auth.name
                return (
                    <div>
                        <Stripes/>
                        <DropdownButton id="dropdown-basic-button" title = {name} size = "sm" variant = "info">
                            <Dropdown.Item href="/api/logout" style = {{color: 'black'}}>Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>
                )
        }
    }
    render() {
        console.log(this.props)
        return (
            <Navbar variant="dark" className = "header">
                <Navbar.Brand>
                    <Link to = {this.props.auth ? '/surveys' : '/'} className = "logo">Emaily</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {this.renderContent()}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)