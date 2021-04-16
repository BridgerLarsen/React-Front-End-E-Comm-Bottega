import {
    SET_NAVBAR_LINKS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All',
                active: true
            },
            {
                _id: 1,
                title: 'JavaScript',
                active: false
            },
            {
                _id: 2,
                title: 'UI/UX',
                active: false
            },
            {
                _id: 3,
                title: 'Linux',
                active: false
            },
            {
                _id: 4,
                title: 'Python',
                active: false
            },
            {
                _id: 5,
                title: 'UML',
                active: false
            },
            {
                _id: 6,
                title: 'Ruby',
                active: false
            },
        ]
    })
}