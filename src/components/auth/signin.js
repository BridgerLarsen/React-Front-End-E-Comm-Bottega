import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="sign-in">
                sign innn
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'SignIn'
})(SignIn);

export default SignIn;