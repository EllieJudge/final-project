import {combineReducers} from 'redux';
import coinReducer from './coinReducer';
import favouriteReducer from './favReducer';

export default combineReducers({
    coins: coinReducer,
    favourite: favouriteReducer
})


//IMPORTANT - combine reducers