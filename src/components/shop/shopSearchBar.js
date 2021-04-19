import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <div className="search-bar-grid">
            <i className="fas fa-search search-bar-grid__icon"></i>
    
            <input 
            className={`${props.className} form-search-bar search-bar-grid__input`} 
            {...props.input} 
            type='text' 
            placeholder={`${props.placeholder}`} 
        />
        </div>
        
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