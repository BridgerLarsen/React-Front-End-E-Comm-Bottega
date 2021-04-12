import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignInForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={`${this.props.className} sign-in-form`}>
                sign innn
            </div>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;