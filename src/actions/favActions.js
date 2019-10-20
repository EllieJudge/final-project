
//FAVOURITE ACTIONS
export const ADD_FAVOURITE = (coin) =>  {
	return {
		type: 'ADD_FAVOURITE',
		payload: coin,
	};
}


export const REMOVE_FAVOURITE = (coin) => {
	return {
		type: 'REMOVE_FAVOURITE',
		payload: coin,
	}
}

