const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const crossElement = document.getElementById("crossBox");
const tickElement = document.getElementById("tickBox");

let guessCount = 0;

guessButton.addEventListener("click", checkGuess);

// Reset classes
crossElement.classList.remove("crossBox");
tickElement.classList.remove("tickBox");

function checkGuess() {
	const userGuess = parseInt(guessInput.value);
	guessCount++;

	if (userGuess === randomNumber) {
		message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${guessCount} attempts.`;
		message.style.color = "green";
		tickElement.classList.add("tickBox");
		crossElement.classList.remove("crossBox");
	} else if (userGuess < randomNumber) {
		message.textContent = "Try a higher number.";
		message.style.color = "red";
		tickElement.classList.remove("tickBox");
		crossElement.classList.add("crossBox");
	} else if (userGuess > randomNumber) {
		message.textContent = "Try a Lower number.";
		message.style.color = "red";
		tickElement.classList.remove("tickBox");
		crossElement.classList.add("crossBox");
	} else {
		message.textContent = "Game Crashed"; // Unknown state: exception handling for this later
		message.style.color = "red";
	}

	guessInput.value = "";
	guessInput.focus();
}
