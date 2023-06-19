import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {setUserReducer} from '../App/reducers/reducers.js';
import {toggleCartReducer} from '../Cart/reducers/reducers.js'
import {getCollectionShop} from '../Shop/reducers/reducers.js'
import {getCollectionDirectory} from '../Directory/reducers/reducers.js'

const rootReducer = combineReducers({
	setUserReducer,
	toggleCartReducer,
	getCollectionShop,
	getCollectionDirectory,
});

const persistConfig = {
	key: 'root',
	storage: storage, 
	whiteList: [toggleCartReducer]
}
export const persistedReducer = persistReducer(persistConfig, rootReducer)