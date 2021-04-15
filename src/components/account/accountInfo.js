import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import AccountInformationForm from './accountInformationForm';

class AccountInfo extends Component {
    constructor() {
        super();
    }

    handleSubmit(fields) {
        console.log(fields);
    }

    render() {
        return (
            <div className="account-information">
                <PageTitle className="account-information__page-title" title="Account Information" />
                <AccountInformationForm className='account-information__form' handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default AccountInfo;