import { createSelector } from 'reselect';

const selectCollections = (state) =>{
	console.log('DIRECTORY', state.getCollectionDirectory.collection)
	return state.getCollectionDirectory.collection
} 
export const selectCollectionDirectoryProp =  createSelector(selectCollections,(collections)=>{
	console.log('DIRECTORY collections',collections)
	return collections
})

