import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {
    constructor() {
        super();
    }

    onSubmit = (fields) => {
        console.log('fields')
    }

    render() {
        return (
            <div className="review">
                <PageTitle className="review__title" title="Order Review" />
                <ReviewForm className="review__form" onSubmit={this.onSubmit} /> 
            </div>
        )
    }
}

export default Review;