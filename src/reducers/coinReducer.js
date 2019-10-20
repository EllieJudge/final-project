import {FETCH_COINS} from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_COINS:
            console.log('reducer coins');
            return {
                ...state,
                items: action.payload
            }
            default:
                return state;
    }
}