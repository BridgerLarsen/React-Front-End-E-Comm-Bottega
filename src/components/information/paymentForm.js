import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormInputs from '../formFields/formInputs';
import { FormButtons } from '../formFields/formButtons';

class PaymentForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={`${this.props.className} shipping-form`}>
                <Field 
                    className="payment-form__name"
                    type="name"
                    title="Name"
                    placeholder="Name"
                    name="name"
                    component={FormInputs}
                />

                <Field 
                    className="payment-form__address"
                    type="address"
                    title="Street Address"
                    placeholder="Street Address"
                    name="address"
                    component={FormInputs}
                />

                <Field 
                    className="payment-form__city"
                    type="city"
                    title="City"
                    placeholder="City"
                    name="city"
                    component={FormInputs}
                />

                <Field 
                    className="payment-form__state"
                    type="state"
                    title="State"
                    placeholder="State"
                    name="state"
                    component={FormInputs}
                />

                <Field 
                    className="payment-form__zipcode"
                    type="zipcode"
                    title="Zipcode"
                    placeholder="Zipcode"
                    name="zipcode"
                    component={FormInputs}
                />

                <div className="payment-form__line"></div>

                <Field
                    className="payment-form__use-this-address"    
                    type="submit"
                    title="Use This Address"
                    name="use-this-address"
                    component={FormButtons}
                />

                <Field
                    className="payment-form__back"    
                    type="button"
                    title="Back"
                    name="back"
                    component={FormButtons}
                    short={true}
                />
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'Payment Form'
})(PaymentForm);

export default PaymentForm;