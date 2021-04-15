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
                        <div className="purcheses__purchase purchase">
                            <img className="purchase__img" src='http://via.placeholder.com/80x80' />
                        </div>
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