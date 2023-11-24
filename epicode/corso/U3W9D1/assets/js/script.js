var _a;
// Select elements by their IDs
var player1Input = document.getElementById("player-1");
var player2Input = document.getElementById("player-2");
var rollDiceBtn = document.getElementById("roll-dice-btn");
var diceRollResult = document.getElementById("dice-roll-result");
var winnerText = document.getElementById("winner");
function rollDice() {
    return Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
}
function determineWinner(player1, player2, targetNumber) {
    var diff1 = Math.abs(player1 - targetNumber);
    var diff2 = Math.abs(player2 - targetNumber);
    if (player1 === targetNumber && player2 === targetNumber) {
        return "Entrambi i giocatori hanno indovinato il numero casuale!";
    }
    else if (player1 === targetNumber) {
        return "Il giocatore 1 ha indovinato il numero casuale!";
    }
    else if (player2 === targetNumber) {
        return "Il giocatore 2 ha indovinato il numero casuale!";
    }
    else {
        if (diff1 < diff2) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
        }
        else if (diff2 < diff1) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
        }
        else {
            return "Nessuno dei due ha azzeccato il numero casuale, entrambi sono alla stessa distanza!";
        }
    }
}
// Prevent form submission and handle the game logic
var handleSubmit = function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var player1 = parseInt(player1Input.value); // Get player 1's number from the input field
    var player2 = parseInt(player2Input.value); // Get player 2's number from the input field
    if (isNaN(player1) || isNaN(player2)) {
        // Check if the inputs are valid numbers
        alert("Inserisci numeri validi per entrambi i giocatori.");
        return;
    }
    var targetNumber = rollDice(); // Generate the random target number
    diceRollResult.innerText = "Numero casuale generato = ".concat(targetNumber);
    var winner = determineWinner(player1, player2, targetNumber);
    winnerText.innerText = winner;
};
// Add the form submission event listener
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handleSubmit);
