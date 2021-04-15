import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class PurchaseHistory extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="purchase-history">
                <PageTitle className="purchase-history__page-title" title="Purchase History" />
            </div>
        )
    }
}

export default PurchaseHistory;