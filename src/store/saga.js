import { all } from 'redux-saga/effects';
import startGame from './sagas/gameInit';
import quiz from './sagas/quiz';

export default function* rootSaga() {
	yield all([startGame(), quiz()]);
}
