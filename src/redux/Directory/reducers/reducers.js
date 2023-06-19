import {collections} from '../../../utilities/data.js';

const INITIAL_STATE = {
	collections: collections
}

export const getCollectionDirectory = (state=INITIAL_STATE, action={})=>{
	switch(action.type){
		default: 
			console.log(state)
			return state;
	}
}