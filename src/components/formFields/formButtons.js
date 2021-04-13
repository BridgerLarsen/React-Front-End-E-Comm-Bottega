import React, { Component } from 'react';

class FormButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, type, title, input, onClick, short} = this.props

        return (
            <div className={`${className} form-button`}>
                <button className={`form-button__button ${short ? 'form-button__back-button' : null}`} 
                    type={type} 
                    {...input} 
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        )
    }
}

export default FormButtons;