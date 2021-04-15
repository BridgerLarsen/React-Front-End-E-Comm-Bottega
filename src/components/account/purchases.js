import React, { Component } from 'react';

class Purchases extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={`${this.props.className} purchases`}>
                purchases go here
            </div>
        )
    }
}

export default Purchases;