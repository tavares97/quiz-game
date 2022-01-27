import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { answerQuestion } from '../store/slices/quiz';
import { finnishGame } from '../store/slices/gameInit';

const GamePage = () => {
	const dispatch = useDispatch();

	const currentQuestion = useSelector(
		state => state.quiz.questions[state.quiz.currentQuestionIndex].question,
	);
	const score = useSelector(state => state.quiz.score);
	const currentQuestionIndex = useSelector(
		state => state.quiz.currentQuestionIndex,
	);

	const answerQuestionHandler = answer => {
		dispatch(answerQuestion(answer));
	};

	const endGameHandler = () => {
		dispatch(finnishGame());
	};

	const [timeLeft, setTimeLeft] = useState(60);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(prev => prev - 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<p>Time Left: {timeLeft}</p>
			<p>Score: {score}</p>
			<p>{currentQuestionIndex}/10</p>
			<p dangerouslySetInnerHTML={{ __html: currentQuestion }}></p>

			<button onClick={() => answerQuestionHandler('True')}>True</button>
			<button onClick={() => answerQuestionHandler('False')}>False</button>
			<button onClick={() => endGameHandler()}>Finnish game</button>
		</div>
	);
};

export default GamePage;
