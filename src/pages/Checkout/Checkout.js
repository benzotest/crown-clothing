import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItemTotalPrice,selectCartItemState} from '../../redux/Cart/selectors/selectors.js';
import './styles/Checkout.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.js';
import StripeButton from '../../components/StripeButton/StripeButton.js';

const mapStateToProps = createStructuredSelector({
	total: selectCartItemTotalPrice,
	cartItem: selectCartItemState,

})

const Checkout = ({total,cartItem}) =>{
	if(cartItem.length){
		return(
			<div id={`checkout-main-div`}>
				<div id={`checkout-header-div`}>
					<div className={`checkout-header-block`}>
						<span>{`Product`}</span>
					</div>
					<div className={`checkout-header-block`}>
						<span>{`Description`}</span>
					</div>
					<div className={`checkout-header-block`}>
						<span>{`Quantity`}</span>
					</div>
					<div className={`checkout-header-block`}>
						<span>{`Price`}</span>
					</div>
					<div className={`checkout-header-block`}>
						<span>{`Remove`}</span>
					</div>
				</div>
				{
					cartItem.map((items)=>{
						return <CheckoutItem 
									key={items.name}
								    cartItem={items}/>
					})
				}
				<div id={`checkout-total`}>
					<span> {`TOTAL: £${total}`}</span>
				</div>
				<span id={`checkout-test-warning`}>
					{`Card Number for testing: 4242424242424242`}
					<br/>
					{`Expiry date : 01/24`}
					<br/>
					{`CVV: 000`}
				</span>
				<div id={`checkout-stripe-button`}>
					<StripeButton price={total}/>
				</div>
			</div>
		)
	}
	else{
		return(
			<div id={`checkout-main-div`}>
				<span id={`checkout-no-item`}> 
					{`No Items In Checkout`}
				</span>
			</div>
		)
	}
}

export default connect(mapStateToProps, null)(Checkout);







