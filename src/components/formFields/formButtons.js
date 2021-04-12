import React, { Component } from 'react';

class FormButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, type, title, input, onClick} = this.props

        return (
            <div className={`${className} form-button`}>
                <button className="form-button__button" type={type} {...input} onClick={onClick}>
                    {title}
                </button>
            </div>
        )
    }
}

export default FormButtons;