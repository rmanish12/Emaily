import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formFields'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SurveyForm extends React.Component {

    renderFields () {       
        return _.map(FIELDS, ({label, name}) => {
            return <Field key = {name} label = {label} type = "text" name = {name} component = {SurveyField}/>
        })        
    }

    render() {
        return(
            // <div>                
            //     <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
            //         {this.renderFields()}
            //         <br/>
            //         <div className = "text-center">
            //             <Button variant="danger" style = {{margin: '0 10px'}}><Link to = "/surveys" style = {{color: 'white'}}>Cancel</Link></Button>
            //             <Button variant="success" type = "submit">Next</Button>    
            //         </div>
            //     </form>
            // </div>
            <Container fluid style={{ lineHeight: '32px'}}>
                <Row debug>
                    <Col md={2} debug></Col>
                    <Col md={8} debug>
                        <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
                        {this.renderFields()}
                            <br/>
                            <div className = "text-center">
                                <Button variant="danger" style = {{margin: '0 10px'}}><Link to = "/surveys" style = {{color: 'white'}}>Cancel</Link></Button>
                                <Button variant="success" type = "submit">Next</Button>    
                            </div>
                        </form>
                    </Col>
                    <Col md={2} debug></Col>
                </Row>
            </Container>
        )
    }
}

function validate (values) {
    const errors = {}

    errors.recipients = validateEmails(values.recipients || '')

    _.each(FIELDS, ({ name }) => {
        if(!values[name]) {
            errors[name] = 'You must provide a value'
        }
    })    

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)