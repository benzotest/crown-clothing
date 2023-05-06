import React,{Component} from 'react';
import './styles/Directory.scss';
import MenuItem from '../Menu-Item/Menu-Item.js'; 
import {directoryState} from './utilities/data.js';

class Directory extends Component {
	constructor(props){
		super(props);
		this.state={
			sections: directoryState
		}
	}

	render(props){
		return(
			<div className={`directory-menu`}>
				{
					this.state.sections.map((data, index)=>{
						return(
							<MenuItem 
								key={data.id}
								imageURL={data.imageURL}
								title={data.title}
								size={data.size}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default Directory;