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

    toggleCart(addToCart, product) {
        if (this.state.showCart && !addToCart) {
            this.setState({ showCart: false })
        } else if (!this.state.showCart) {
            this.setState({ showCart: true })
        } 

        if (addToCart) {
            this.props.addProductsToCart(product)
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
                                <ShopProduct onClick={() => this.toggleCart(true, product)} {...product} key={product._id} />
                            )
                        })
                    }
                </div>

                <ShopCart showCart={this.state.showCart} onClick={() => this.toggleCart(false)} className="shop__cart" /> 
                    
                {
                    !this.state.showCart ? 
                    <CartButton 
                        className="shop__cart-toggle" 
                        onClick={() => this.toggleCart(false)} 
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