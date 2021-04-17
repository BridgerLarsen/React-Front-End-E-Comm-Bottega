import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Shop extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: "/signin"
            }
        ]

        this.props.setShopLinks();
        this.props.getShopCategories();
        this.props.setHeaderLinks(headerLinks);

        // filter products with links
        this.props.setShopProducts();
    }

    render() {
        return (
            <div className="shop">
                {/* shop search bar */}
                {/* shop product */}
                {/* shop cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        navBarLinks: state.headerNavBar.navBarLinks
    }
}

Shop = connect(mapStateToProps, actions)(Shop)

export default Shop;