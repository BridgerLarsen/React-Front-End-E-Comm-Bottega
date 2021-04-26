import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButtons } from '../formFields/formButtons';
import ReviewProducts from './reviewProducts';
import GreenPriceTag from '../greenPriceTag';

class ReviewForm extends Component {
    constructor() {
        super();
    }

    render() {
        const { className, handleSubmit, subtotal } = this.props;
        
        let tax = 0.16;

        return (
            <form className={`${className} review-form`} onSubmit={handleSubmit}>
                <div className="review-form__legend">
                    <div className="review-form__legend__name">Name</div>

                    <div className="review-form__legend__quantity">Quantity</div>

                    <div className="review-form__legend__price">Price</div>
                </div>

                <ReviewProducts className="review-form__products" /> 

                <div className="review-form__line"></div>

                <Field
                    className="review-form__proceed"
                    onClick={() => { history.push('/signin') }}
                    type="submit"
                    title="Proceed To Checkout"
                    name="proceed"
                    component={FormButtons}
                />

                <Field
                    className="review-form__back"
                    onClick={() => { history.push('/shop') }}
                    type="button"
                    title="Back"
                    name="back"
                    short={true}
                    component={FormButtons}
                />

                <div className="review-form__details review-details">
                    <div className="review-details__subtotal review-detail">
                        <div className="review-detail__title">Subtotal</div>
                        <div className="review-detail__price">${subtotal}</div>
                    </div>

                    <div className="review-details__tax review-detail">
                        <div className="review-detail__title">Tax</div>
                        <div className="review-detail__price">${tax}</div>
                    </div>

                    <div className="review-details__shipping review-detail">
                        <div className="review-detail__title">Shipping</div>
                        <div className="review-detail__price">$0</div>
                    </div>

                    <div className="review-details__total review-detail review-detail-total">
                        <div className="review-detail__title review-detail__green">Total</div>
                        <GreenPriceTag className="review-detail__price" title={subtotal + tax} /> 
                    </div>
                </div>
            </form> 
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;