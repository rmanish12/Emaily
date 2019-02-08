import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import FIELDS from './formFields'
import { FETCH_USER } from '../../actions/types'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const SurveyReview = (props) => {

    const reviewFields = _.map(FIELDS, ({name, label}) => {
        const val = props.formValues[name]
        return (
            // <div key = {name}>
            //     <label>{label}</label>
            //     <div>{props.formValues[name]}</div>
            // </div>
            
            
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2" style = {{fontWeight: "bold"}}>
                {label}
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue = {val} />
                </Col>
            </Form.Group>            
        )
    })

    return(
        <div>
            <h5 style = {{textAlign: 'center'}}>Please review your inputs</h5>
            <div style = {{textAlign: 'center'}}>{reviewFields}</div>
            <div className = "text-center">
                <Button variant="danger" onClick = {props.onCancel} style = {{margin: '0 10px'}}>Back</Button>
                <Button variant="success" onClick = {() => props.submitSurvey(props.formValues, props.history)}>Send Survey</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formValues: state.form.surveyForm.values
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitSurvey: async (values, history) => {
            const res = await axios.post('/api/surveys', values)

            history.push('/surveys')

            dispatch({type: FETCH_USER, payload: res.data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveyReview))