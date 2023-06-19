import { createSelector } from 'reselect';

const userState = (state) =>{
	return state.setUserReducer.currentUser
}

export const selectUserState = createSelector(userState,
	(user)=>{
		return user
	}
)