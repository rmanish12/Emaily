import React from 'react'

import '../styles/Homepage.css'
import homeImg from '../images/homepage.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Homepage = () => {
    return (
        <Jumbotron>
            <Container>
                <img src = {homeImg} alt = ""/>
            </Container>
        </Jumbotron>
    )
}

export default Homepage