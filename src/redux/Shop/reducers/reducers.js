import {collections} from '../../../utilities/data.js';

const INITIAL_STATE = {
	collections: collections
}

export const getCollectionShop = (state=INITIAL_STATE,action={})=>{
	switch(action.type){
		default: 
			return state;
	}
} 