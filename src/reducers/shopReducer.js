import {
    SET_SHOP_PRODUCTS,
    GET_SHOP_CATEGORIES
} from '../actions/types';

const INITIAL_STATE = {
    products: [],
    productsSelected: [],
    categories: []
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
        default: return state;
    }
}