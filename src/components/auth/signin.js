import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

import * as actions from '../../actions';

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (fields) => {
        this.props.signIn(fields);
        this.props.history.push('/account');
    }

    render() {
        return (
            <div className="sign-in">
                <PageTitle className="signin-page__page-title" title="Login" />
                <SignInForm className='sign-in__form' onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;