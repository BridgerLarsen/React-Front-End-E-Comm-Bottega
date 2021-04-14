import React, { Component } from 'react';

class Account extends Component {
    constructor() {
        super();
    }

    renderContent() {
        return <h1>content</h1>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default Account;