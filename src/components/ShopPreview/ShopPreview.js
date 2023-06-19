import React from 'react';
import './styles/ShopPreview.scss';
import ShopItem from '../ShopItem/ShopItem.js';
import withRouter from '../../global-functions/withRouter.js';

const ShopPreview = (props)=>{
	return(
		<div className={`shop-preview`}>
			<h1 className={`shop-preview-title`}
				onClick={()=>{props.router.navigate(`${props.router.location.pathname}/${props.data.routeName}`)}}
				style={{cursor: "pointer", textDecoration: "underline"}}>
				{props.data.title}
			</h1>
			<div className={`preview`}>
				{
					props.data.items
					.filter((data,index)=>{
						if(index < 4){
							return data;
						}
					})
					.map((data,index)=>{
						return (
							<ShopItem 
								data={data}
								key={data.id}/>
						)
					})
				}
			</div>
		</div>
	)
}

export default withRouter(ShopPreview);




