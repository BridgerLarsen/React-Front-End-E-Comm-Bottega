import React, { Component } from 'react';

class PurchaseDetail extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={`${this.props.className} purchase-detail`}>
                purchase details goes here
            </div>
        )
    }
}

export default PurchaseDetail;