import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import SurveyList from './survey/SurveyList'

const dashboard = () => {
    return (
        <div style = {{backgroundColor: 'aliceblue'}}>
            <div><SurveyList/></div>
            <div style = {{textAlign: 'center'}}>
                <Button variant="secondary"><Link to = "/survey/new" style = {{color: 'yellowgreen'}}>New Survey</Link></Button>
            </div>
        </div>
    )
}

export default dashboard