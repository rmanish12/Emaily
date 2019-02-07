import React from 'react'
import { Link } from 'react-router-dom'

const dashboard = () => {
    return (
        <div>
            <div>dashboard</div>
            <Link to = "/survey/new">New Survey</Link>
        </div>
    )
}

export default dashboard