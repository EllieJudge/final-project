import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

//STORE REDUX DEV TOOL IN THIS VARIABLE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //OR USE COMPOSE FROM REDUX

//STORE (with all reducers in it)
const store = createStore(
   rootReducer,
   initialState,
   composeEnhancers( applyMiddleware(...middleware) ) //MIDDLEWARE - for connecting react to redux
);
export default store;