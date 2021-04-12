import React, { Component } from 'react';

import SignInForm from './signinForm';

class SignIn extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="sign-in">
                <SignInForm className='sign-in__form'/>
            </div>
        )
    }
}

export default SignIn;