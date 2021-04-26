import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {
    constructor() {
        super();
    }

    onSubmit = (fields) => {
        console.log('fields')
    }

    render() {
        let subtotal = 0;

        this.props.cartProducts.map(cartproduct => {
            subtotal += cartproduct.product.price * cartproduct.quantity;
        })

        return (
            <div className="review">
                <PageTitle className="review__title" title="Order Review" />
                <ReviewForm className="review__form" onSubmit={this.onSubmit} subtotal={subtotal} /> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        cartProducts: state.user.cartProducts
    })
}

Review = connect(mapStateToProps)(Review);

export default Review;