import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionProp} from '../../redux/Shop/selectors/selectors.js';
import './styles/Shop.scss';
import ShopPreview from '../../components/ShopPreview/ShopPreview.js';

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionProp
})

const Shop = ({collections})=>{
	console.log("SHOP", collections)
		return(
			<div className={`shop`}>
				{
					collections
					.map((data, index)=>{
						return(
							<ShopPreview 
								data={data}
								key={data.id}
							/>
						)
					})
				}
			</div>
		)
	}


export default connect(mapStateToProps, null)(Shop);



