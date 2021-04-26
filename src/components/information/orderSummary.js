import React, { Component } from 'react';

import { UnderlinedTitle, InfoDetails } from './orderInfoHelp';

class OrderSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.className} order-summary`}>
                <UnderlinedTitle className="order-summary__title" title="Order Summary" />
                <InfoDetails className="order-summary__subtotal" title="4 Stickers" value="7.96" /> 
                <InfoDetails className="order-summary__tax-shipping" title="Taxes & Shipping" value="0.00" />
                <InfoDetails className="order-summary__total" title="Total" value="8.02" />
            </div>
        )
    }
}

export default OrderSummary;