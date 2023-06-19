import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/Cart/actions/actions.js';
import './styles/ShopItem.scss';
import Button from '../Button/Button.js';

const mapDispatchToProps = (dispatch) =>{
	return({
		addItem: (data)=>{dispatch(addItem(data))},
	})
}

const ShopItem = (props) => {
	const {imageUrl,name,price} = props.data;
	return(
		<div className={`shop-item`}>
			<div 
				className={`shop-item-image`}
				style={{backgroundImage: `url(${imageUrl})`}}>
			</div>
			<div className={`shop-item-footer`}>
				<span className={`shopt-item-name`}>
					{name}
				</span>
				<span className={`shopt-item-price`}>
					{price}
				</span>		
			</div>		
			<Button 
				inverted
				id={`button-shop-item`}
				onClick={()=>{
					console.log(props.data); props.addItem(props.data)}}>
					{'ADD TO CART'}
			</Button>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(ShopItem);

