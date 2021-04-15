import React, { Component } from 'react';

class FormFields extends Component {
    constructor() {
        super();
    }

    render() {
        const { title, className, type, placeholder, input } = this.props;

        return (
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title}</label>
                <input className="form-input__input" type={type} placeholder={placeholder} {...input} />
            </div>
        )
    }
}

export default FormFields;