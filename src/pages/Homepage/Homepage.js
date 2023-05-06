import React, {Component} from 'react';
import './styles/Homepage.scss';
import Directory from '../../components/Directory/Directory.js';

export default class Homepage extends Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(props){
		return(
			<div className={`homepage`}>
				<Directory/>
			</div>
		)
	}
}