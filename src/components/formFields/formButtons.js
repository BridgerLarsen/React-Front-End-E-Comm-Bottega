import React, { Component } from 'react';

export class FormButtons extends Component {
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

export class LongGrayButton extends Component {
    constructor() {
        super();
    }

    render() {
        const { className, type, labelTitle, title, input, onClick, short} = this.props

        return (
            <div className={`${className} form-button-long-gray`}>
                <label className="form-button-long-gray__label">{labelTitle}</label>
                <button className="form-button-long-gray__button" 
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

