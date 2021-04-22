import React from 'react';

function CartButton(props) {
    const { onClick, icon, className } = props;
    return (
        <div onClick={onClick} className={`${className} cart-button`}>
            {icon}
        </div>
    )
}

export default CartButton;