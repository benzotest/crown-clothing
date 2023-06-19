import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionDirectoryProp} from '../../redux/Directory/selectors/selectors.js';
import './styles/Directory.scss';
import MenuItem from '../Menu-Item/Menu-Item.js'; 

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionDirectoryProp
})

const Directory = ({collections})=>{
	return(
		<div className={`directory-menu`}>
			{
				collections.map((data, index)=>{
					return(
						<MenuItem 
							key={data.id}
							imageURL={data.imageURL}
							title={data.title}
							size={data.size}
							linkURL={data.routeName}
						/>
					)
				})
			}
		</div>
	)
}


export default connect(mapStateToProps, null)(Directory);



