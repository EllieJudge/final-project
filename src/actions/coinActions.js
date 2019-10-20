import {FETCH_COINS} from './types';
import Axios from 'axios';

//GET COINS IN ACTION, WE SEND THEM TO REDUCER
//Why does dispatch work here without importing it, and why doesnt it work in my favActions? Grr.

export const fetchCoins = () => dispatch => { //do dispatch here, like a return statement
    console.log('fetching')
    Axios.get('https://api.coingecko.com/api/v3/coins?order=rank_desc&per_page=100')
    .then (coins => 
        dispatch({
            type: FETCH_COINS,
            payload: coins
        }))
        .catch (function (err) { //DO I NEED THIS?
            console.log('err', err)
        }) 
}