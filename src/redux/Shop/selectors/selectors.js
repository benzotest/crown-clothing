import { createSelector } from 'reselect';

const selectCollection = state => state.getCollectionShop.collections

export const selectCollectionProp =  createSelector(selectCollection,(collection)=>{
	return collection
})

