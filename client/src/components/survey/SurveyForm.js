import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'
import FIELDS from './formFields'
import Button from 'react-bootstrap/Button'

class SurveyForm extends React.Component {

    renderFields () {       
        return _.map(FIELDS, ({label, name}) => {
            return <Field key = {name} label = {label} type = "text" name = {name} component = {SurveyField}/>
        })        
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <br/>
                    <div className = "text-center">
                        <Button variant="success" type = "submit">Next</Button>
                        <br/>
                        <Link to = "/surveys">Cancel</Link>
                    </div>
                </form>
            </div>
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