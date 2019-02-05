import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
// import { connect } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
// import actions from '../actions'

class Stripes extends React.Component {

    render() {       
        return (
            <StripeCheckout
                name = "Emaily"
                description = "Email Credits"
                amount = {500}
                token = {token => console.log(token)}
                stripeKey = 'pk_test_n6bZGIKYA8fQz0Tu4aFrW4GA'
            >
                <Button variant="secondary">Add Credits</Button>
            </StripeCheckout>
        )
    }
}

export default Stripes