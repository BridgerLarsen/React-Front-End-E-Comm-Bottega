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
        const navbarLinks = [
            {
                title: 'Purchase History',
                active: true,
                component: <PurchaseHistory />
            },
            {
                title: 'Account Information',
                active: false,
                component: <AccountInfo />
            }
        ]

        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks(navbarLinks);
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
            <div>
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