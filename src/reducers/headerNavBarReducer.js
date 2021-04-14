import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [],
    navBarLinks: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS:
            return {
                ...state,
                navBarLinks: action.payload
            }
        case CHANGE_NAVBAR_ACTIVE:
            const navBarLinks = state.navBarLinks.map(link => {
                link.active = false;
                if (link._id === action.payload) {
                    link.active = true;
                }
                return link;
            })
            return {
                ...state,
                navBarLinks  
            }
        default: return state;
    }
}