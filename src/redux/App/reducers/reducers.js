import {APP_CONSTANTS} from '../constants.js/constants.js';

const INITIAL_STATE_APP = {
	currentUser: false
}

export const setUserReducer = (state = INITIAL_STATE_APP, action={})=>{
	switch(action.type){
		case APP_CONSTANTS.SET_USER_OBJECT:
			return Object.assign({}, state, {currentUser: action.payload})
		default:
			return state;
	}
}