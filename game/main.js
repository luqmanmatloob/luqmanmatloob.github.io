    const randomNumber = Math.floor(Math.random() * 100) + 1;

    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const message = document.getElementById("message");

    let guessCount = 0;

    guessButton.addEventListener("click", checkGuess);

    function checkGuess() {
        const userGuess = parseInt(guessInput.value);
        guessCount++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${guessCount} attempts.`;
            message.style.color = "green";
          
        } else if (userGuess < randomNumber) {
            message.textContent = "Try a higher number.";
            message.style.color = "red";
        } else {
            message.textContent = "Try a lower number.";
            message.style.color = "red";
        }

        guessInput.value = "";
        guessInput.focus();
    }