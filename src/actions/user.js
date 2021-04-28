import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_PRODUCTS_TO_CART,
    AUTHENTICATE_USER
} from './types';

export function signIn(fields) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            _id: 0,
            name: 'Bridger Larsen',
            address: '1234 I live here',
            email: fields.email
        }
    })
}

export function addProductsToCart(product) {
    return ({
        type: ADD_PRODUCTS_TO_CART,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: []
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 7.06,
                orderNumber: 'AO0644SDFS',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 4.02,
                orderNumber: 'SN04242dFS',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Kristine Hudgens',
                    shippingAddress: '1234 South State Street'
                }
            },
            {
                _id: 2,
                total: 18.44,
                orderNumber: 'DF224545FS',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Snow',
                    shippingAddress: '5486 Any Street'
                }
            },
            {
                _id: 3,
                total: 45.96,
                orderNumber: 'A20478Y45FD',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Albert Einstein',
                    shippingAddress: '490 South 200 East'
                }
            },
            {
                _id: 4,
                total: 9.85,
                orderNumber: 'DU5G372dFS',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Bridger Larsen',
                    shippingAddress: '700 East Canal Blvd'
                }
            },
            {
                _id: 5,
                total: 5.55,
                orderNumber: 'HG1DSD8UY3',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Nielson',
                    shippingAddress: '1234 South State Street'
                }
            },
            {
                _id: 6,
                total: 2.05,
                orderNumber: 'ASDK456FFS',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Coll Wold',
                    shippingAddress: '1234 South State Street'
                }
            },
            {
                _id: 7,
                total: 9.85,
                orderNumber: 'A5FK4SDF5S',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'David Bunker',
                    shippingAddress: '1234 South State Street'
                }
            }
        ]
    })
}