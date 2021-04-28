import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import history from '../../history';

import FormInputs from '../formFields/formInputs';
import { FormButtons } from '../formFields/formButtons';
import Details from '../details';

class SignInForm extends Component {
    constructor() {
        super();
    }

    render() {
        // const { className, handleSubmit } = this.props;

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
            <form className={`${this.props.className} sign-in-form`} onSubmit={this.props.handleSubmit}>
                <Field 
                    className="sign-in-form__email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    name="email" 
                    component={FormInputs} 
                />

                <Field 
                    className="sign-in-form__password" 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    name="password" 
                    component={FormInputs} 
                />

                <div className="sign-in-form__line"></div>

                <Field
                    className="sign-in-form__login"
                    type="login"
                    title="Login"
                    name="login"
                    component={FormButtons}
                />

                <Details className="sign-in-form__details" title="Quick Links" links={links} />
            </form> 
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;