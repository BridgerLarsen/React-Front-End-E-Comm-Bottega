import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as actions from '../../actions';

import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';
import CartButton from './cartButton'

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            showCart: false
        }

    this.toggleCart = this.toggleCart.bind(this);
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

    toggleCart() {
        if (this.state.showCart) {
            this.setState({ showCart: false })
        } else if (!this.state.showCart) {
            this.setState({ showCart: true })
        }
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

                <ShopCart showCart={this.state.showCart} onClick={this.toggleCart} className="shop__cart" /> 
                    
                {
                    !this.state.showCart ? 
                    <CartButton 
                        className="shop__cart-toggle" 
                        onClick={this.toggleCart} 
                        icon={<FontAwesomeIcon icon="shopping-cart" />}  
                    />
                    : null
                }
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