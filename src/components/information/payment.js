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
            <div className="payment">
                <PageTitle className="payment__page-title" title="Payment Information" />
                <PaymentForm onSubmit={this.onSubmit} className="payment__form" />
            </div>
        )
    }
}

export default Payment;