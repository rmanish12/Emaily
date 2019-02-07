import React from 'react'
import SurveyForm from './SurveyForm'
import SurveyReview from './SurveyFormReview'

import { reduxForm } from 'redux-form'

class SurveyNew extends React.Component {

    state = {
        showReview: false
    }


    renderContent () {
        if(this.state.showReview) {
            return <SurveyReview onCancel = {() => this.setState({ showReview: false })}/>
        }

        return <SurveyForm onSurveySubmit = {() => this.setState({ showReview: true })}/>
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew)