const numbersArray = Array.from({ length: 100 }, (_, i) => i + 1);
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const resultElement = document.getElementById('result');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultElement.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;

    if (guess < targetNumber) {
        resultElement.textContent = 'Too low!';
    } else if (guess > targetNumber) {
        resultElement.textContent = 'Too high!';
    } else {
        resultElement.textContent = `Yay! You guessed the correct number ${targetNumber} in ${attempts} attempts.`;
        disableInputAndButton();
    }
}

function disableInputAndButton() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');
    guessInput.disabled = true;
    submitButton.disabled = true;
}