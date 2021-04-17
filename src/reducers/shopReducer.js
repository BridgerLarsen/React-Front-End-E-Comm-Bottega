import {
    SET_SHOP_PRODUCTS,
    GET_SHOP_CATEGORIES,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from '../actions/types';

const INITIAL_STATE = {
    products: [],
    categories: [],
    filteredProducts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_PRODUCTS:
            return ({
                ...state,
                products: action.payload
            })
        case GET_SHOP_CATEGORIES:
            return ({
                ...state,
                categories: action.payload
            })
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            var filteredProducts = [];

            state.products.map(product => {
                if (product.belongsTo.includes(action.payload)) {
                    filteredProducts.push(product);
                }
            })

            return ({
                ...state,
                filteredProducts
            })
        default: return state;
    }
}