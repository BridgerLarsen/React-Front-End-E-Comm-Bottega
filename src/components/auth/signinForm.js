import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import FormFields from '../formFields';

class SignInForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form className={`${this.props.className} sign-in-form`}>
                <Field 
                    className="sign-in-form__email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    name="email" 
                    component={FormFields} 
                />

                <Field 
                    className="sign-in-form__password" 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    name="password" 
                    component={FormFields} 
                />
            </form> 
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;