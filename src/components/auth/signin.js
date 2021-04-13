import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

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
                <PageTitle className="signin-page__page-title" title="Login" />
                <SignInForm className='sign-in__form' handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default SignIn;