import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import history from '../../history';

import CartProduct from './cartProduct';
import CartButton from './cartButton';

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

            <CartFooter  className="cart-content__footer" products={props.products} />
        </div>
    )
}

function CartFooter(props) {
    let subtotal = 0;

    props.products.map(cartproduct => {
        subtotal += cartproduct.product.price * cartproduct.quantity;
    })

    return (
        <div className={`${props.className} cart-footer`}>
            <a onClick={() => history.push('/order/review') } className="cart-footer__checkout">
                Checkout
            </a>

            <div className="cart-footer__subtotal">
                Subtotal
            </div>

            <div className="cart-footer__price">
                {subtotal}
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
            <div id="shop-cart" className={`${this.props.className} shop-cart `}>
                <CartButton  onClick={this.props.onClick} className="shop-cart__toggle" icon={<FontAwesomeIcon icon='times' />} />
                <CartContent className={`shop-cart__content ${!this.props.showCart ? "cart-hidden" : null}`} products={this.props.cartProducts} />
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