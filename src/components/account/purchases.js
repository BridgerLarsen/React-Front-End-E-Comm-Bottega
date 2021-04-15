import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Purchases extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchUserPurchases();
    }

    render() {
        return (
            <div className={`${this.props.className} purchases`}>
                {this.props.purchases.map(purchase => {
                    return (
                        <h1>{purchase.title}</h1>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        purchases: state.user.purchases
    }
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;