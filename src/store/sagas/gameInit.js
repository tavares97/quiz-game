import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { fetchQuiz } from '../../utils/api';
import { cancelGame, startGame } from '../slices/gameInit';
import { fetchQuestionsFail, fetchQuestionsSuccess } from '../slices/quiz';

function* fetchQuestions() {
	try {
		const data = yield call(fetchQuiz);
		yield put(fetchQuestionsSuccess(data.results));
	} catch (error) {
		yield put(
			fetchQuestionsFail(
				'Sorry there was an error fetching your questions! Try again later',
			),
		);
	}
}

//IF USER CANCELS THE GAME WHILE ITS LOADING IT WILL STOP THE FETCH ACTION
function* cancelFetch(forkedSaga) {
	while (true) {
		yield take(cancelGame.type);
		yield cancel(forkedSaga);
	}
}

export default function* startGameSaga() {
	while (true) {
		yield take(startGame.type);
		const forkedSaga = yield fork(fetchQuestions);

		yield fork(cancelFetch, forkedSaga);
	}
}
