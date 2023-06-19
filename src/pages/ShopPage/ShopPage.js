import React,{Component} from 'react';
import withRouter from '../../global-functions/withRouter.js';
import { Navigate } from "react-router-dom";
import './styles/ShopPage.scss';
import {collections} from '../../utilities/data.js';
import ShopItem from '../../components/ShopItem/ShopItem.js';

class ShopPage extends Component{
	constructor(props){
		super(props);
		this.state={
			collections: collections
		}
	}

	result = () =>{
		return this.state.collections.find((result)=>{
			if(result.routeName === this.props.router.params.routeName){
				return result
			}
			else{
				return undefined
			}
		})
	}

	filtered = () =>{
	   const result = this.state.collections.filter((data)=>{
			if(data === this.result()){
				return data
			}
			else{
				return data
			}
		})
	   console.log(result)
	   return result[0].items.map((data)=>{
	   			return <ShopItem data={data}
	   						key={data.name}/>
	   })
	}

	render(props){
		return(
			<div id={`shop-page-main-div`}>
				{
					this.result() ?
						this.filtered()
					:
						<Navigate to="/*"/>
				}
			</div>
		)
	}
}

export default withRouter(ShopPage);

