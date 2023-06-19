export const addItemToCart = (state, action) =>{

	console.log(action)

	// check if cartItem exists
	const exits = state.cartItems.find((cartitem)=>{
			console.log(cartitem.name)
			console.log(action.name)
		if(cartitem.name === action.name){
			return cartitem
		}
	})
	// if the cartItem exists
	if (exits){

		// filter the state array to get the cartitem we need 
		// returns array
		const cartItem = state.cartItems.filter((cartItem)=>{
			if(exits.name === cartItem.name){	
				return cartItem
			}
		})
		console.log(cartItem[0])

		// turn returned cart item array into object 
		const cartItemObject = cartItem[0];
		console.log(cartItem[0])

		// update object with updated quantity value
		const cartItemResult = Object.assign({}, cartItemObject, {
			quantity: cartItemObject.quantity +1
		})
		console.log(cartItemResult)

		// loop through original state array, replace the cartitem
		// object with updated cartitem object and return array
		const newCartItemArray = state.cartItems.map((cartItem)=>{
			if(cartItem.name === cartItemResult.name){
				return cartItem = cartItemResult
			}
			else{
				return cartItem
			}
		})
		console.log(newCartItemArray)

		// return updated cartItems array with updated object
		return newCartItemArray
	}
	else{
		// create object with action info plus quantity prop 
		// updated
		const updatedCartItem = Object.assign(action,{quantity: 1})
		console.log(updatedCartItem)

		// update state array with new updatedCartItem  
		const updatedCartItemArray = [...state.cartItems, updatedCartItem]
		console.log(updatedCartItemArray)

		// return newArray 
		return updatedCartItemArray
	}
}

export const removeItemFromCart =(state,action)=>{
	return state.cartItems.filter((items)=>{
    			if(!(items.name === action.name)){
    				return items
    			}
    		})
}

export const decreaseItem =(state,action)=>{

	const filter = state.cartItems.filter((item)=>{
		if(item.name === action.name){
			return item
		}
	})

	const filterObj = Object.assign({},filter[0],{
		quantity: filter[0].quantity -1
	})


	if(filterObj.quantity > 0){
		return  state.cartItems.map((item)=>{
			if(item.name === filterObj.name){
				return item = filterObj
			}
			else{
				return item
			}
		})
	}
	else{
		return removeItemFromCart(state, filterObj )
	}
}


