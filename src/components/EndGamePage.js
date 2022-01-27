import React from 'react';
import { useDispatch } from 'react-redux';
import { restartGame } from '../store/slices/gameInit';

const EndGamePage = () => {
	const dispatch = useDispatch();

	const restartHandler = () => {
		dispatch(restartGame());
	};
	return (
		<div>
			<button onClick={() => restartHandler()}>Restart game</button>
		</div>
	);
};

export default EndGamePage;
