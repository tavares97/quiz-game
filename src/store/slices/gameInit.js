import { createSlice } from '@reduxjs/toolkit';
import * as stages from '../../utils/constants';
import { fetchQuestionsFail, fetchQuestionsSuccess } from './quiz';

const initialState = {
	stage: stages.START_GAME,
	username: '',
};

const gameState = createSlice({
	name: 'gameState',
	initialState,
	reducers: {
		startGame(state, action) {
			state.username = action.payload.username;
			state.stage = stages.FETCHING_GAME;
		},
		cancelGame(state) {
			state.stage = stages.START_GAME;
		},
		finnishGame(state) {
			state.stage = stages.END_GAME;
		},
	},
	//THIS PART REFERENCES TO 'EXTERNAL' ACTIONS
	/**
	 * IF START GAME SAGA RUNS SUCCESSFULLY, IT WILL CALL THE 'fetchQuestionsSuccess' ON THE
	 * 'quizSlice' AND WILL UPDATE THE STATE THERE AND HERE, IN THIS CASE CHANGING TO THE NEW STAGE
	 * */
	extraReducers: builder => {
		builder
			.addCase(fetchQuestionsSuccess, state => {
				state.stage = stages.GAME;
			})
			.addCase(fetchQuestionsFail, state => {
				state.stage = stages.START_GAME;
			});
	},
});

export const { startGame, cancelGame, finnishGame } = gameState.actions;

export default gameState.reducer;
