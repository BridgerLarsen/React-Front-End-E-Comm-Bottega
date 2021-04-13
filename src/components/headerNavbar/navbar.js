import React, { Component } from 'react';
import { connect } from 'react-redux'

class Navbar extends Component {
    constructor() {
        super();
    } 
    render() {
        return (
            <div className="navbar">
                {
                    this.props.navBarLinks.map((link, index) => {
                        return (
                            <a className="navbar__link" key={index} onClick={() => console.log('trying to switch tab')}>
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

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;