import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import history from '../../history';

import CartProduct from './cartProduct';
import CartButton from './cartButton';

function CartContent(props) {
    const { className, products, user } = props;

    let count = products.length;
    return (
        <div className={`${className} cart-content`}>
            <div className="cart-content__title">
                Cart ({count})
            </div>

            <div className="cart-content__products">
                {
                    products.map(product => {
                        return (
                            <h1 key={product._id}>
                                <CartProduct {...product}  />
                            </h1>
                        )
                    })
                }
            </div>

            <CartFooter user={user} className="cart-content__footer" products={products} />
        </div>
    )
}

function CartFooter(props) {
    const { className, user, products} = props;
    let subtotal = 0;

    products.map(cartproduct => {
        subtotal += cartproduct.product.price * cartproduct.quantity;
    })

    const signedInCheck = () => {
        if (user.name) {
            history.push('/order/review')
        } else {
            history.push('/signin')
        }
    }

    return (
        <div className={`${className} cart-footer`}>
            <a onClick={() => signedInCheck() } className="cart-footer__checkout">
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
                <CartContent 
                    className={`shop-cart__content ${!this.props.showCart ? "cart-hidden" : null}`} 
                    products={this.props.cartProducts} 
                    user={this.props.user}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        cartProducts: state.user.cartProducts,
        user: state.user.user
    })
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;