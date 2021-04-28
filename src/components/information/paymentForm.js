import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import history from '../../history';

import FormInputs from '../formFields/formInputs';
import { FormButtons } from '../formFields/formButtons';
import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './orderInfoHelp';

class PaymentForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={`${this.props.className} payment-form`}>
                <Field 
                    className="payment-form__name"
                    type="name"
                    title="Name on Credit Card"
                    placeholder="Name"
                    name="name"
                    component={FormInputs}
                />

                <Field 
                    className="payment-form__card"
                    type="card"
                    title="Credit Card Number"
                    placeholder="____-____-____-____"
                    name="card"
                    component={FormInputs}
                />

                <Field 
                    className="payment-form__expiration"
                    type="expiration"
                    title="Expiration Date"
                    placeholder="MM/YYYY"
                    name="expiration"
                    component={FormInputs}
                />

                <Field 
                    className="payment-form__ccv"
                    type="ccv"
                    title="CCV"
                    placeholder="CCV"
                    name="ccv"
                    component={FormInputs}
                />

                <div className="payment-form__line"></div>

                <Field
                    className="payment-form__back" 
                    onClick={() => history.push('/information/shipping')}
                    type="button"
                    title="Back"
                    name="back"
                    component={FormButtons}
                    short={true}
                />

                <Field
                    className="payment-form__pay-complete"    
                    type="submit"
                    title="Pay and Complete Order"
                    name="pay-complete"
                    component={FormButtons}
                />

                <OrderSummary className="payment-form__order-summary" /> 

                <div className="payment-form__shipping-info shipping-info">
                    <UnderlinedTitle className="shipping-info__title" title="Shipping To" />
                    
                    <div className="shipping-info__name small-text">
                        {this.props.user.name}
                    </div>

                    <div className="shipping-info__address small-text">
                        {this.props.user.address}
                    </div>
                </div>
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'Payment Form'
})(PaymentForm);

function mapStateToProps(state) {
    return ({
        user: state.user.user
    })
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm;