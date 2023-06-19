import React from 'react';
import './styles/CheckoutItem.scss';
import {connect} from 'react-redux';
import {removeItemFromCart,addItem,decreaseItems} from '../../redux/Cart/actions/actions.js';

const mapDispatchToProps = (dispatch) =>{
	return({
		removeItemFromCart: (cartItem)=>{dispatch(removeItemFromCart(cartItem))},
		addItem: (cartItem)=>{dispatch(addItem(cartItem))},
		decreaseItems: (cartItem)=>{dispatch(decreaseItems(cartItem))}
	})
}

const CheckoutItem = ({cartItem,removeItemFromCart,addItem,decreaseItems}) => {
	const {imageUrl,name,quantity,price} = cartItem;
	return(
		<div className={`checkoutItem-main-div`}>
			<div className={`checkoutItem-image-div`}>
				<img alt={`item`} src={imageUrl}/>
			</div>
			<span className={`checkoutItem-name-div`}>
				{name}
			</span>
			<div className={`checkoutItem-quantity-div`}>
				<span onClick={()=>{decreaseItems(cartItem)}}>&#8592;</span>
				{quantity}
				<span onClick={()=>{addItem(cartItem)}}>&#8594;</span>
			</div>
			<span className={`checkoutItem-price-div`}>
				{price}
			</span>
			<div 	
				onClick={()=>{
					removeItemFromCart(cartItem)
				}}
				className={`checkoutItem-remove-button`}>
				&#9747;
			</div>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(CheckoutItem);


