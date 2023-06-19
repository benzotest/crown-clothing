import {APP_CONSTANTS} from '../constants.js/constants.js';

export const setUser = (user)=>{
	return({
		type: APP_CONSTANTS.SET_USER_OBJECT,
		payload: user
	})
}