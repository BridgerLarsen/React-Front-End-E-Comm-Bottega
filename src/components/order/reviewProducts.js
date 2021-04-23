import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewProducts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.className} review-products`}>
                {this.props.cartProducts.map(cartProduct => {
                    return (
                        <h1>{cartProduct.product.title}</h1>
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