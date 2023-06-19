import React from 'react';
import './styles/Homepage.scss';
import Directory from '../../components/Directory/Directory.js';


const Homepage = () => {
	return(
	<div className={`homepage`}>
		<Directory/>
	</div>
	)
}

export default Homepage;