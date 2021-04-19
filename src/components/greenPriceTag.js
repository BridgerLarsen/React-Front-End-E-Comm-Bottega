import React from 'react';

function GreenPriceTag(props) {
    return (
        <div className={`${props.className} green-price-tag`}>
            ${props.title}
        </div>
    )
}

export default GreenPriceTag;