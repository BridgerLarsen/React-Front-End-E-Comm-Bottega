import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UnderlinedTitle, InfoDetails } from './orderInfoHelp';

class OrderSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let subtotal = 0;
        let taxes = 0.16;
        let stickerAmount = 0;

        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.product.price * cartProduct.quantity;
            stickerAmount += cartProduct.quantity;
        })

        return (
            <div className={`${this.props.className} order-summary`}>
                <UnderlinedTitle className="order-summary__title" title="Order Summary" />
                <InfoDetails className="order-summary__subtotal" title={`${stickerAmount} Stickers`} value={`${subtotal}`} /> 
                <InfoDetails className="order-summary__tax-shipping" title="Taxes & Shipping" value={`${taxes}`} />
                <InfoDetails className="order-summary__total" title="Total" value={`${subtotal + taxes}`} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        cartProducts: state.user.cartProducts
    })
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;