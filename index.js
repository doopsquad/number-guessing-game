let guess = window.prompt("Guess a number between 0 and 100.");
let randomNumber = Math.floor(Math.random() * 101);

Number(guess);

while (guess != randomNumber) {
    if (guess > randomNumber) {
        window.alert("Womp womp, too high.");
    }
    else if (guess < randomNumber) {
        window.alert("Womp Womp, too low!");
    }
    guess = window.prompt("Guess a number between 0 and 100.");
}

if (guess == randomNumber) {
    window.alert("Ya guessed it right!");
}