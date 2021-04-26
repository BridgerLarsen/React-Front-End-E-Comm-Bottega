import React from 'react';

import GreenPriceTag from '../greenPriceTag';

export function UnderlinedTitle(props) {
    return (
        <div className={`${props.className} underlined-title`}>
            {props.title}
        </div>
    )
}

export function InfoDetails(props) {
    const { className, title, value } = props; 
    return (
        <div className={`${className} info-details`}>
            <div className="info-details__title">
                {title}
            </div>

            <GreenPriceTag className="info-details__value" title={value} />
        </div>
    )
}