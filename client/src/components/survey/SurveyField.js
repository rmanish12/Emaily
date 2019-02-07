import React from 'react'
import Form from 'react-bootstrap/Form'

const SurveyField = ({ input, label, meta: {error, touched}}) => {
    return(
        <div>
            {/* <label>{label}</label> */}
            <Form.Label style = {{fontWeight: 'bold'}}>{label}</Form.Label>
            {/* <input {...input}/> */}
            <Form.Control {...input} />
            <div style = {{color: 'red'}}>{touched && error}</div>
        </div>
    )
}

export default SurveyField