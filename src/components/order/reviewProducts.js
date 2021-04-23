import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.className} review-products`}>
                {this.props.cartProducts.map(cartProduct => {
                    return (
                        <ReviewProduct key={cartProduct._id} {...cartProduct} /> 
                    )
                })}
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return ({
        cartProducts: state.user.cartProducts
    })
}

ReviewProducts = connect(mapStateToProps)(ReviewProducts);

export default ReviewProducts;