import { combineReducers } from 'redux';
import gameState from './slices/gameInit';
import quiz from './slices/quiz';

export default combineReducers({
	gameState,
	quiz,
});
