import React from 'react';
import { useSelector } from 'react-redux';

import * as stages from '../utils/constants';
import StartGame from './StartGamePage';
import Fetching from './FetchingPage';
import Game from './GamePage';
import EndGame from './EndGamePage';

const MainPage = () => {
	const currentStage = useSelector(state => state.gameState.stage);

	let displayedStage;
	//CHECKS IN THE STATE FOR THE CURRENT STAGE AND SELECTS THE PAGE TO SHOW ACCORDINGLY
	switch (currentStage) {
		case stages.START_GAME:
			displayedStage = <StartGame />;
			break;

		case stages.FETCHING_GAME:
			displayedStage = <Fetching />;
			break;

		case stages.GAME:
			displayedStage = <Game />;
			break;

		case stages.END_GAME:
			displayedStage = <EndGame />;
			break;

		default:
			break;
	}

	return <>{displayedStage}</>;
};

export default MainPage;
