import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import PurchaseHistory from './purchaseHistory';
import AccountInfo from './accountInfo';

class Account extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Shop',
                path: '/shop'
            },
            {
                _id: 1,
                title: 'Logout',
                path: '/'
            }
        ]

        const navbarLinks = [
            {
                _id: 0,
                title: 'Purchase History',
                active: true,
                component: <PurchaseHistory />
            },
            {
                _id: 1,
                title: 'Account Information',
                active: false,
                component: <AccountInfo />
            }
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }

    componentWillUnmount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    renderContent() {
        let activeComponent;
        if (this.props.navBarLinks) {
            this.props.navBarLinks.forEach(link => {
                if (link.active) {
                    activeComponent = link.component
                }
            })
        }

        return activeComponent;
    }

    render() {
        return (
            <div className="account">
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        navBarLinks: state.headerNavBar.navBarLinks,
        headerLinks: state.headerNavBar.headerLinks
    }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;