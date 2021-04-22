import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButtons } from '../formFields/formButtons';

class ReviewForm extends Component {
    constructor() {
        super();
    }

    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form className={`${className} review-form`} onSubmit={handleSubmit}>
                <div className="review-form__line"></div>

                <Field
                    className="review-form__proceed"
                    onClick={() => { history.push('/account') }}
                    type="submit"
                    title="Proceed To Checkout"
                    name="proceed"
                    component={FormButtons}
                />

                <Field
                    className="review-form__back"
                    onClick={() => { history.push('/signin') }}
                    type="button"
                    title="Back"
                    name="back"
                    short={true}
                    component={FormButtons}
                />
            </form> 
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;