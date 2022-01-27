import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../store/slices/gameInit';

const StartGamePage = () => {
	const [username, setUsername] = useState('');
	const [gameType, setGameType] = useState('Games');

	const dispatch = useDispatch();

	const startGameHandler = () => {
		dispatch(startGame({ username, gameType }));
	};

	return (
		<div>
			<input
				value={username}
				onChange={e => setUsername(e.target.value)}
				placeholder='Your name'
			/>
			<input
				type='radio'
				value={gameType}
				name='Video Games'
				checked={gameType == 'Games'}
				onChange={() => setGameType('Games')}
			/>
			Video Games
			<input
				type='radio'
				value={gameType}
				name='Anime'
				checked={gameType == 'Anime'}
				onChange={() => setGameType('Anime')}
			/>
			Anime
			<br />
			<br />
			<button onClick={startGameHandler}>Start Game</button>
		</div>
	);
};

export default StartGamePage;
