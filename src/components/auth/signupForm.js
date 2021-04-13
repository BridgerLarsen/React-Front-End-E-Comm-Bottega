import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import history from '../../history';

import FormInputs from '../formFields/formInputs';
import FormButtons from '../formFields/formButtons';
import Details from '../details';

class SignUpForm extends Component {
    constructor() {
        super();
    }

    render() {

        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('Forgot Email')
            },
            {
                _id: 2,
                title: 'Forgot Password?',
                onClick: () => console.log('Forgot Password')
            }
        ]

        return (
            <form className={`${this.props.className} sign-up-form`} onSubmit={this.props.handleSubmit}>
                <Field 
                    className="sign-up-form__name" 
                    type="name" 
                    title="Name" 
                    placeholder="Name" 
                    name="name" 
                    component={FormInputs} 
                />

                <Field 
                    className="sign-up-form__email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    name="email" 
                    component={FormInputs} 
                />

                <Field 
                    className="sign-up-form__password" 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    name="password" 
                    component={FormInputs} 
                />

                <Field 
                    className="sign-up-form__confirm" 
                    type="password" 
                    title="Confirm Password" 
                    placeholder="Confirm Password" 
                    name="confirm" 
                    component={FormInputs} 
                />

                <div className="sign-up-form__line"></div>

                <Field
                    className="sign-up-form__login"
                    onClick={() => { console.log('submiting') }}
                    type="login"
                    title="Login"
                    name="login"
                    component={FormButtons}
                />

                <Field
                    className="sign-up-form__back"
                    onClick={() => { history.push('/signin') }}
                    type="button"
                    title="Back"
                    name="back"
                    short={true}
                    component={FormButtons}
                />

                <Details className="sign-up-form__details" title="Quick Links" links={links} />
            </form> 
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUn'
})(SignUpForm);

export default SignUpForm;