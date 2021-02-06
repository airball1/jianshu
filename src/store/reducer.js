import { reducer as headerReducer } from '../common/header/store';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
	header: headerReducer
})

