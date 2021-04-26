import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import FormInputs from '../formFields/formInputs';
import { FormButtons } from '../formFields/formButtons';
import OrderSummary from './orderSummary';

class ShippingForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={`${this.props.className} shipping-form`}>
                <Field 
                    className="shipping-form__name"
                    type="name"
                    title="Name"
                    placeholder="Name"
                    name="name"
                    component={FormInputs}
                />

                <Field 
                    className="shipping-form__address"
                    type="address"
                    title="Street Address"
                    placeholder="Street Address"
                    name="address"
                    component={FormInputs}
                />

                <Field 
                    className="shipping-form__city"
                    type="city"
                    title="City"
                    placeholder="City"
                    name="city"
                    component={FormInputs}
                />

                <Field 
                    className="shipping-form__state"
                    type="state"
                    title="State"
                    placeholder="State"
                    name="state"
                    component={FormInputs}
                />

                <Field 
                    className="shipping-form__zipcode"
                    type="zipcode"
                    title="Zipcode"
                    placeholder="Zipcode"
                    name="zipcode"
                    component={FormInputs}
                />

                <div className="shipping-form__line"></div>

                <Field
                    className="shipping-form__use-this-address" 
                    onClick={() => history.push('/information/payment') }   
                    type="submit"
                    title="Use This Address"
                    name="use-this-address"
                    component={FormButtons}
                />

                <Field
                    className="shipping-form__back" 
                    onClick={() => history.push('/order/review') }   
                    type="button"
                    title="Back"
                    name="back"
                    component={FormButtons}
                    short={true}
                />

                <OrderSummary className="shipping-form__summary" />
            </form>
        )
    }
}

ShippingForm = reduxForm({
    form: 'Shipping Form'
})(ShippingForm);

export default ShippingForm;