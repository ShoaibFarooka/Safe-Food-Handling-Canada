/** @format */

import { legacy_createStore as createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducers';

const reducer = combineReducers({
	user: userReducer,
});
let initialState = {};
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
