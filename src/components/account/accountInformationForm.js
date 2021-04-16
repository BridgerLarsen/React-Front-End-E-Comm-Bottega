import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import FormInputs from '../formFields/formInputs';
import { LongGrayButton } from '../formFields/formButtons';

class AccountInformationForm extends Component {
    constructor() {
        super();

        this.state = {
            showPasswords: false
        }
    }

    toggleChangePasswordFields() {
        this.setState({
            showPasswords: true
        })
    }

    render() {
        return (
            <form className={`${this.props.className} account-information-form`} onSubmit={this.props.handleSubmit}>
                <Field 
                    className="account-information-form__name" 
                    type="name" 
                    title="Name" 
                    placeholder="Name" 
                    name="name" 
                    component={FormInputs} 
                />

                <Field 
                    className="account-information-form__email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    name="email" 
                    component={FormInputs} 
                />

                <Field 
                    className="account-information-form__street-address" 
                    type="address" 
                    title="Street Address" 
                    placeholder="Street Address" 
                    name="address" 
                    component={FormInputs} 
                />

                <Field 
                    className="account-information-form__city" 
                    type="city" 
                    title="City" 
                    placeholder="City" 
                    name="city" 
                    component={FormInputs} 
                />

                <Field 
                    className="account-information-form__state" 
                    type="state" 
                    title="State" 
                    placeholder="State" 
                    name="state" 
                    component={FormInputs} 
                />

                <Field 
                    className="account-information-form__zipcode" 
                    type="zipcode" 
                    title="Zipcode" 
                    placeholder="Zipcode" 
                    name="zipcode" 
                    component={FormInputs} 
                />

                {
                    this.state.showPasswords ? 
                    [
                        <Field 
                            className="account-information-form__current" 
                            type="password" 
                            title="Current Password" 
                            placeholder="Current Password" 
                            name="current" 
                            component={FormInputs} 
                        />,
                        
                        <Field 
                            className="account-information-form__new" 
                            type="password" 
                            title="New Password" 
                            placeholder="New Password" 
                            name="new" 
                            component={FormInputs} 
                        />,

                        <Field 
                            className="account-information-form__confirm" 
                            type="password" 
                            title="Confirm Password" 
                            placeholder="Confirm Password" 
                            name="confirm" 
                            component={FormInputs} 
                        />
                    ]
                    :
                    <Field
                        className="account-information-form__change-password"
                        onClick={() => this.toggleChangePasswordFields()}
                        type="button"
                        labelTitle="Password"
                        title="Change Password"
                        name="change-password"
                        component={LongGrayButton}
                    />
                }
            </form> 
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'SignIn'
})(AccountInformationForm);

export default AccountInformationForm;