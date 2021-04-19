import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <input 
            className={`${props.className} form-search-bar`} 
            {...props.input} 
            type='text' 
            placeholder={`${props.placeholder}`} 
        />
    )
}

class ShopSearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={`${this.props.className} shop-search-bar`}>
                <Field 
                    className='Shop-search-bar__form-search-bar' 
                    name='query'
                    placeholder='Search' 
                    component={FormSearchBar} 
                />
            </form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar)

export default ShopSearchBar;