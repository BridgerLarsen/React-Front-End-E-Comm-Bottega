import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_PRODUCTS_TO_CART,
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    user: {},
    cartProducts: [],
    purchases: [],
    purchaseDetail: {
        _id: null,
        total: null,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            shippingAddress: ''
        }
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return ({
                ...state,
                user: action.payload
            })

        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        case SET_PURCHASE_DETAIL:
            let purchaseDetail;
            state.purchases.map(purchase => {
                if (purchase._id === action.payload) {
                    purchaseDetail = purchase
                }
            })

            return ({
                ...state,
                purchaseDetail
            })
        case SET_CART_PRODUCTS:
            return ({
                ...state,
                cartProducts: action.payload
            })
        case ADD_PRODUCTS_TO_CART:
            var exists = false;
            const newCartProducts = action.payload;
            var cartProducts = [];

            state.cartProducts.map(cartProduct => {
                if (cartProduct.product._id === newCartProducts._id) {
                    exists = true;
                    cartProduct.quantity += 1;
                }
                cartProducts.push(cartProduct);
            })

            if (exists === false) {
                cartProducts.push({
                    _id: state.cartProducts.length + 1,
                    product: newCartProducts,
                    quantity: 1
                })
            }

            return ({
                ...state,
                cartProducts
            })
        default: return state;
    }
}