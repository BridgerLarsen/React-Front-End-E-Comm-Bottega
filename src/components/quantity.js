import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Quantity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.className} quantity`}>
                <div className="quantity__count">
                    {this.props.quantity}
                </div>

                <div className="quantity__plus">
                    <FontAwesomeIcon icon='plus' />
                </div>

                <div className="quantity__minus">
                    <FontAwesomeIcon icon="minus" /> 
                </div>
            </div>
        )
    }
}

export default Quantity;