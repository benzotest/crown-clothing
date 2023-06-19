import { createSelector } from 'reselect';

// extract the part of state that you need 
const cartItemState= (state) =>{
	console.log(state.toggleCartReducer.cartItems)
	return state.toggleCartReducer.cartItems
}

// return a selector of the cartItem
export const selectCartItemState = createSelector(cartItemState,
	(cartItem)=>{
		console.log(cartItem)
		return cartItem
	})

// returns props for mapStateToProps
export const selectQuantityValue = createSelector(cartItemState,
	(cartItem)=>{
		if(cartItem.length === 0){
			return 0
		}
		else{
			return cartItem.reduce((acc,cartItem)=>{
				return acc + cartItem.quantity
			}, 0)
		}
	}
)

// returns props for mapStateToProps
export const selectCartItemTotalPrice = createSelector(cartItemState,
	(cartItem)=>{
		if(cartItem.length === 0){
			return 0
		}
		else{
			return cartItem.reduce((acc,cartItem)=>{
				return acc + (cartItem.quantity * cartItem.price)
			}, 0)
		}
	}
)