import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                title: 'Purchase 1',
                amount: 7.06
            },
            {
                _id: 1,
                title: 'Purchase 2',
                amount: 14.65
            }
        ]
    })
}