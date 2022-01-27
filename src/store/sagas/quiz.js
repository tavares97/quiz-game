import { race, take, delay, put } from 'redux-saga/effects';
import { finnishGame } from '../slices/gameInit';
import {
	answerQuestion,
	fetchQuestionsSuccess,
	nextQuestion,
} from '../slices/quiz';

function* answers() {
	for (let i = 0; i < 10; i++) {
		yield take(answerQuestion.type);
		yield put(nextQuestion());
	}
}

export default function* quiz() {
	while (true) {
		yield take(fetchQuestionsSuccess.type);

		yield race({
			delay: delay(60000),
			done: answers(),
		});

		yield put(finnishGame());
	}
}
