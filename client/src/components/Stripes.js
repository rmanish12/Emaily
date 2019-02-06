import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import { FETCH_USER } from '../actions/types'

class Stripes extends React.Component {

    render() {       
        return (
            <StripeCheckout
                name = "Emaily"
                description = "Email Credits"
                amount = {500}
                token = {token => this.props.handleToken(token)}
                stripeKey = 'pk_test_n6bZGIKYA8fQz0Tu4aFrW4GA'
            >
                <Button variant="info" size = "sm">Add Credits</Button>
            </StripeCheckout>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleToken: async (token) => {
            const res = await axios.post('/api/stripes', token)

            dispatch({type: FETCH_USER, payload: res.data})
        }
    }
}

export default connect(null, mapDispatchToProps)(Stripes)