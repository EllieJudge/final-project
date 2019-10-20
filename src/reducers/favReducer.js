//REDUCER - FOR SAVING TO FAVS
//reducer changes the state !
import {ADD_FAVOURITE} from '../actions/types';
import {REMOVE_FAVOURITE} from '../actions/types';


const favouriteReducer = (state = [], action) => {
	switch(action.type) {
		case ADD_FAVOURITE:
            return state.concat([action.payload]); //push payload (coins data) into state (empty array)
            
		case REMOVE_FAVOURITE:
            return state.filter(coin => coin !== action.payload )				
		default:
			return state;
	}
}

export default favouriteReducer;