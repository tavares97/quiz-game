const apiUrl =
	'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean';

export const fetchQuiz = async () => {
	const res = await fetch(apiUrl);

	if (!res.ok) {
		const message = `An error has occured: ${res.status}`;
		throw new Error(message);
	}

	return res.json();
};
