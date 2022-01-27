import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	questions: [],
	error: null,
	score: 0,
	currentQuestionIndex: 0,
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		fetchQuestionsSuccess(state, action) {
			state.questions = action.payload;
			state.score = 0;
			state.currentQuestionIndex = 0;
		},
		fetchQuestionsFail(state, action) {
			state.error = action.payload;
		},
		answerQuestion(state, action) {
			const currentQuestion = state.questions[state.currentQuestionIndex];
			state.score +=
				action.payload === currentQuestion.correct_answer ? 1 : 0;
		},
		nextQuestion(state) {
			state.currentQuestionIndex += 1;
		},
	},
});

export const {
	fetchQuestionsFail,
	fetchQuestionsSuccess,
	answerQuestion,
	nextQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;
