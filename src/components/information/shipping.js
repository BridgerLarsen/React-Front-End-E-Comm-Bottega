import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import ShippingForm from './shippingForm';

class Shipping extends Component {
    constructor() {
        super();
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="shipping-form">
                <PageTitle className="shipping__title" title="Shipping Address" /> 
                <ShippingForm onSubmit={this.onSubmit} className="shipping-form__form" />
            </div> 
        )
    }
}

export default Shipping;
