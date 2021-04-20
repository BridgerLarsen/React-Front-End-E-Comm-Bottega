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
    return (
        <div className={`${props.className} cart-content`}>

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
                <CartContent className="shop-cart__content" />
            </div>
        )
    }
}

export default ShopCart;