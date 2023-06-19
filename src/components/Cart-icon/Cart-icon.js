import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './styles/Cart-icon.scss';
import CartIconImage from './assets/shopping-bag.svg';
import {selectQuantityValue} from '../../redux/Cart/selectors/selectors.js';

const mapStateToProps = createStructuredSelector({
	cartItemsQuantityTotal: selectQuantityValue
})

const CartIcon = ({toggleCartAction,cartItemsQuantityTotal}) =>{
	console.log(cartItemsQuantityTotal)
	return(
		<div id={'cart-icon-main-div'} 
		onClick={toggleCartAction}>
			<img src={CartIconImage}
				id={'cart-icon-image'}
				alt={`shopping-bag-icon`}/>
			<span id={'cart-icon-span'}>{cartItemsQuantityTotal}</span>
		</div>
	)
}

export default connect(mapStateToProps, null)(CartIcon);