import React, { Component } from 'react';
import { connect } from 'react-redux';


function PurchaseDetailLabel(props) {
    return (
        <div className={`${props.className} purchase-detail-label`}>
            <div className='purchase-detail-label__title'>
                {props.title}
            </div>
            <div className={`purchase-detail-label__value ${props.green ? 'green' : null}`}>{props.value}</div>
        </div>
    )
}

class PurchaseDetail extends Component {
    constructor() {
        super();
    }

    render() {
        const { orderNumber, orderDate, total, creditCard, user} = this.props.purchaseDetail; 

        return (
            <div className={`${this.props.className} purchase-detail`}>
                <PurchaseDetailLabel 
                    className="purchase-detail__order-number"
                    title="Order Number"
                    value={orderNumber}
                    green={false}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__order-date"
                    title="Order Date"
                    value={orderDate}
                    green={false}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__shipping"
                    title="Shipping Address"
                    value={`${user.name}\n${user.shippingAddress}`}
                    green={false}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__total"
                    title="Total"
                    value={total}
                    green={true}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__credit-card"
                    title="Credit Card"
                    value={creditCard}
                    green={false}
                />

                <a className="purchase-detail__track-shipment">
                    Track Shipment
                </a>

                <a className="purchase-detail__print-receipt">
                    Print Receipt
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        purchaseDetail: state.user.purchaseDetail
    })
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail)

export default PurchaseDetail;