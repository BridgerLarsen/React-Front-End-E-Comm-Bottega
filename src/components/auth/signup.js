import React, { Component } from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';

class SignUp extends Component {
    constructor() {
        super();
    }

    handleSubmit(fields) {
        console.log(fields);
    }

    render() {
        return (
            <div className="sign-up">
                <PageTitle className="signup-page__page-title" title="Register" />
                <SignUpForm className='sign-up__form' handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default SignUp;