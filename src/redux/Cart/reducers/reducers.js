import {CartActionTypes} from '../constants/constants.js';
import {addItemToCart, removeItemFromCart,decreaseItem} from '../utilities/CartReduxUtilities.js';

const INITIAL_STATE = {
	toggleCart: false,
	cartItems:[],
}

export const toggleCartReducer=(state=INITIAL_STATE, action={})=>{
	switch(action.type){
		case CartActionTypes.TOGGLE_CART_ACTION:
			return Object.assign({}, state, {toggleCart: !state.toggleCart})
		case CartActionTypes.ADD_ITEM:
    		return Object.assign({},state,{cartItems:addItemToCart(state,action.payload)})
    	case CartActionTypes.REMOVE_CART_ITEM:
    		return Object.assign({},state, {cartItems:removeItemFromCart(state,action.payload)})
    	case CartActionTypes.DECREASE_ITEM:
		console.log("click")
    		return Object.assign({},state, {cartItems: decreaseItem(state, action.payload)})
		default: 
			return state;
	}
}
