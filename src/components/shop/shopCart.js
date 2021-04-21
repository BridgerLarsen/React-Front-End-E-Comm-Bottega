import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import CartProduct from './cartProduct';

function CartButton(props) {
    return (
        <div className={`${props.className} cart-button`}>
            {props.icon}
        </div>
    )
}

function CartContent(props) {
    let count = props.products.length;
    return (
        <div className={`${props.className} cart-content`}>
            <div className="cart-content__title">
                Cart ({count})
            </div>

            <div className="cart-content__products">
                {
                    props.products.map(product => {
                        return (
                            <h1 key={product._id}>
                                <CartProduct {...product}  />
                            </h1>
                        )
                    })
                }
            </div>

            <CartFooter  className="cart-content__footer" />
        </div>
    )
}

function CartFooter(props) {
    const price = 7.96
    return (
        <div className={`${props.className} cart-footer`}>
            <a className="cart-footer__checkout">
                Checkout
            </a>

            <div className="cart-footer__subtotal">
                Subtotal
            </div>

            <div className="cart-footer__price">
                {price}
            </div>
        </div>
    )
}

class ShopCart extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchCartProducts();
    }

    render() {
        return (
            <div className={`${this.props.className} shop-cart`}>
                <CartButton className="shop-cart__toggle" icon={<FontAwesomeIcon icon='times' />} />
                <CartContent className="shop-cart__content" products={this.props.cartProducts} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        cartProducts: state.user.cartProducts
    })
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;