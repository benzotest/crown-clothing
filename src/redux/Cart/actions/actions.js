import {CartActionTypes} from '../constants/constants.js';

export const toggleCart = () => {
	return({
		type: CartActionTypes.TOGGLE_CART_ACTION
	})
}

export const addItem = (item)=>{
	return({
		type: CartActionTypes.ADD_ITEM,
		payload: item
	})
}

export const removeItemFromCart = (item)=>{
	return({
		type: CartActionTypes.REMOVE_CART_ITEM,
		payload: item	
	})
}

export const decreaseItems = (item)=>{
	return({
		type: CartActionTypes.DECREASE_ITEM,
		payload: item
	})
}

