const historyEl = document.querySelector('#history');
const modalIDInput = document.querySelector('#modalIDInput');
const textInput = document.querySelector('#textInput');

const apiToken = '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';

document.querySelector('#pingButton').addEventListener('click', () => historyEl.innerHTML += '\npong');
document.querySelector('#loadModelButton').addEventListener('click', () => {
	fetch(
		`https://api-inference.huggingface.co/models/${modalIDInput.value}`,
		{
			method: 'POST',
			headers: { 'Authorization':  `Bearer ${apiToken}`},
			body: JSON.stringify({ inputs: 'Hello' }),
		},
	).then(response => {
		if (response.ok) {
			historyEl.innerHTML += '\nModel loaded and ready.';
		} else {
			historyEl.innerHTML += '\nError, model not loaded and not ready!';
		}
	});
});
document.querySelector('#chatButton').addEventListener('click', () => {
	fetch(
		`https://api-inference.huggingface.co/models/${modalIDInput.value}`,
		{
			method: 'POST',
			headers: { 'Authorization':  `Bearer ${apiToken}`},
			body: JSON.stringify({ inputs: textInput.value }),
		},
	).then(response => {
		if (response.ok) {
			response.json().then(json => historyEl.innerHTML += '\n' + json.generated_text);
		} else {
			historyEl.innerHTML += '\nError, please try again!';
		}
	});
});

