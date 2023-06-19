import React from 'react';
import './styles/CartItem.scss';

const CartItem = ({data})=>{
	return(
		<div id={`cart-item-main-div`}>
			<img src={data.imageUrl} alt={`cart-item-img`}/>
			<div id={`cart-item-info-div`}>
				<span>{data.name}</span>
				<span>
					{`${data.quantity} x £${data.price * data.quantity}`}
				</span>
			</div>
		</div>
	)
}

export default CartItem;