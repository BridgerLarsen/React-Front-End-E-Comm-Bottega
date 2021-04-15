import React, { Component } from 'react';
import { connect } from 'react-redux';


function PurchaseDetailLabel(props) {
    return (
        <div className={`${props.className} purchase-detail-label`}>
            <div className='purchase-detail-label__title'>
                {props.title}
            </div>
            <div className="purchase-detail-label__value">{props.value}</div>
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
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__order-date"
                    title="Order Date"
                    value={orderDate}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__shipping"
                    title="Shipping Address"
                    value={`${user.name}\n${user.shippingAddress}`}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__total"
                    title="Total"
                    value={total}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__credit-card"
                    title="Credit Card"
                    value={creditCard}
                />
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