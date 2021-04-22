import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class Review extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="review">
                <PageTitle className="review__title" title="Order Review" />
            </div>
        )
    }
}

export default Review;