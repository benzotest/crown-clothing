import React from 'react';
import './styles/Menu-Item.scss';
import withRouter from '../../global-functions/withRouter.js'

const MenuItem = (props)=>{
	return(
		<div 
		className={`${props.size} menu-item`}
		onClick={()=>{
			props.router.navigate(`${props.router.location.pathname}shop/${props.linkURL}`)
		}}>
			<div className={`background-image`}
			style={{backgroundImage: `url(${props.imageURL}`}}>
			</div>
			<div className={`content`}>
				<h1 className={`title`}> {props.title} </h1>
				<span className={`subtitle`}> 
					SHOP NOW
				</span>
			</div>
		</div>
	)
}

export default withRouter(MenuItem);