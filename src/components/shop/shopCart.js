import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

            </div>

            <div className="cart-content__footer">

            </div>
        </div>
    )
}

class ShopCart extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={`${this.props.className} shop-cart`}>
                <CartButton className="shop-cart__toggle" icon={<FontAwesomeIcon icon='times' />} />
                <CartContent className="shop-cart__content" products={[2, 6, 7]} />
            </div>
        )
    }
}

export default ShopCart;