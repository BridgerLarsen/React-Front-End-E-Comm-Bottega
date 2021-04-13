import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import FormInputs from '../formFields/formInputs';
import FormButtons from '../formFields/formButtons';

class SignInForm extends Component {
    constructor() {
        super();
    }

    render() {
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
                    onClick={() => { console.log('submiting') }}
                    type="login"
                    title="Login"
                    name="login"
                    component={FormButtons}
                />
            </form> 
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;