import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions';

class Navbar extends Component {
    constructor() {
        super();
    } 

    handleOnClick(link) {
        this.props.changeNavbarActive(link._id)
        this.props.filterProductsWithCategoryId(link._id);
    }

    render() {
        return (
            <div className="navbar">
                {
                    this.props.navBarLinks.map((link, index) => {
                        return (
                            <a 
                                className={`navbar__link ${link.active ? "green-text" : null}`} 
                                key={index} 
                                onClick={() => this.handleOnClick(link)}
                            >
                                {link.title}    
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        navBarLinks: state.headerNavBar.navBarLinks
    }
}

Navbar = connect(mapStateToProps, actions)(Navbar);

export default Navbar;