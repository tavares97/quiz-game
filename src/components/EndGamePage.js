import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../store/slices/gameInit';

const EndGamePage = () => {
	const dispatch = useDispatch();

	const answers = useSelector(state => state.quiz.answers);
	const score = useSelector(state => state.quiz.score);

	console.log(answers);

	const restartHandler = () => {
		dispatch(restartGame());
	};
	return (
		<div>
			<p>Your score was: {score}</p>
			<button onClick={() => restartHandler()}>Restart game</button>

			{answers.map((answer, idx) => (
				<div key={idx}>
					<p dangerouslySetInnerHTML={{ __html: answer.question }}></p>
					<p>
						{answer.answer} - {answer.correctAnswer}
					</p>
				</div>
			))}
		</div>
	);
};

export default EndGamePage;
