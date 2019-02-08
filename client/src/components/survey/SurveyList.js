import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

import axios from 'axios'
import { FETCH_SURVEYS } from '../../actions/types'

class SurveyList extends React.Component {

    componentDidMount() {
        this.props.fetchSurveys()
    }

    renderSurveys () {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div style = {{display:'inline-block', margin: '10px 10px'}} key = {survey.title}>
                    <Card style={{ width: '28rem'}}>
                        <Card.Body style = {{backgroundColor: 'antiquewhite'}}>
                            <Card.Title style = {{color: 'cornflowerblue'}}>{survey.title}</Card.Title>
                            <Card.Text>
                                {survey.body}
                            </Card.Text>
                            <Card.Text style = {{fontStyle: 'italic'}}>
                                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                            </Card.Text>
                            <Card.Text>
                                <div style = {{fontWeight: 'bold'}}>
                                    Yes: <span style = {{textDecoration: 'underline'}}>{survey.yes}</span>
                                    <br/>
                                    No: <span style = {{textDecoration: 'underline'}}>{survey.no}</span>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        surveys: state.surveys
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSurveys: async () => {
            const res = await axios.get('/api/surveys')

            dispatch({ type: FETCH_SURVEYS, payload: res.data })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList)