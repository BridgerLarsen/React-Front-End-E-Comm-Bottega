import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class Shipping extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <PageTitle className="shipping__title" title="Shipping Address" /> 
        )
    }
}

export default Shipping;
