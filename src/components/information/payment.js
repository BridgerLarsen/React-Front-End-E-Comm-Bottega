import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import PaymentForm from './paymentForm';

class Payment extends Component {
    constructor() {
        super();
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="payment-form">
                <PageTitle className="payment__title" title="Payment Information" />
                <PaymentForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default Payment;