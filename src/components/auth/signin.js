import React, { Component } from 'react';

import SignInForm from './signinForm';

class SignIn extends Component {
    constructor() {
        super();
    }

    handleSubmit(fields) {
        console.log('hello');
    }

    render() {
        return (
            <div className="sign-in">
                <SignInForm className='sign-in__form' handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default SignIn;