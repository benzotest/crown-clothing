import React from 'react';
import './styles/CartDropdown.scss';
import withRouter from '../../global-functions/withRouter.js';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItemState} from '../../redux/Cart/selectors/selectors.js';
import {toggleCart} from '../../redux/Cart/actions/actions.js';
import Button from '../Button/Button.js';
import CartItem from '../CartItem/CartItem.js';

const mapStateToProps = createStructuredSelector({
	cartItem: selectCartItemState
})

const CartDropdown = (props) =>{
	const {cartItem,router,dispatch} = props;

	return(
		<div id={`cart-dropdown-main-div`}>
			<div id={`cart-dropdown-cart-items-div`}>
				{	
					cartItem.length === 0 ?
						<span id={`cart-dropdown-no-items`}> 
							{`Your cart is empty :( `}
						</span>
					:
						cartItem.map((cartitem, index)=>{
							return(
								<CartItem data = {cartitem} 
								key={cartitem.name}/>
							)
						})
				}
			</div>
			<Button id={`cart-dropdown-button-div`}
				onClick={()=>{router.navigate(`/checkout`); dispatch(toggleCart())}}>
				{`GO TO CHECKOUT`}
			</Button>
		</div>
	)
}

export default withRouter(connect(mapStateToProps, null)(CartDropdown));





