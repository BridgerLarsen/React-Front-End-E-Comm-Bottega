import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class Payment extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <PageTitle className="payment__title" title="Payment Information" />
        )
    }
}

export default Payment;