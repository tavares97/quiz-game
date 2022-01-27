
export const fetchQuizGames = async () => {
	const res = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean');

	if (!res.ok) {
		const message = `An error has occured: ${res.status}`;
		throw new Error(message);
	}

	return res.json();
};

export const fetchQuizAnime = async () => {
	const res = await fetch('https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=boolean');

	if (!res.ok) {
		const message = `An error has occured: ${res.status}`;
		throw new Error(message);
	}

	return res.json();
};
