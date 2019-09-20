import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'; 
import { connect } from 'react-redux';
import * as actions from '../actions';

// amount in US cents

class Payments extends Component {
    render() {
        
        return (
            
            <StripeCheckout 
                name="Powered by Stripe API!"
                description="$5 for 5 email-campaign credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Email Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);    