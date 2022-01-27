import { call, cancel, fork, put, take, select } from 'redux-saga/effects';
import { fetchQuizGames, fetchQuizAnime } from '../../utils/api';
import { cancelGame, startGame } from '../slices/gameInit';
import { fetchQuestionsFail, fetchQuestionsSuccess } from '../slices/quiz';

function* fetchQuestions() {
	try {
		const type = state => state.gameState.type;
		const gameType = yield select(type);
		let data;

		if (gameType === 'Games') {
			data = yield call(fetchQuizGames);
		} else {
			data = yield call(fetchQuizAnime)
		}

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
