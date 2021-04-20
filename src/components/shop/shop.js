import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';

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

    handleSubmit = (fields) => { 
        this.props.filterProductsWithQuery(fields);
    }

    render() {
        return (
            <div className="shop">
                <ShopSearchBar onSubmit={this.handleSubmit} className='shop__search-bar' />
                <div className="shop__products">
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>
                <ShopCart className="shop__cart" />
                {/* shop cart button */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        navBarLinks: state.headerNavBar.navBarLinks,
        filteredProducts: state.shop.filteredProducts
    }
}

Shop = connect(mapStateToProps, actions)(Shop)

export default Shop;