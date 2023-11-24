const player1Input = document.getElementById("player-1") as HTMLInputElement;
const player2Input = document.getElementById("player-2") as HTMLInputElement;
const rollDiceBtn = document.getElementById(
  "roll-dice-btn"
) as HTMLButtonElement;
const diceRollResult = document.getElementById(
  "dice-roll-result"
) as HTMLHeadingElement;
const winnerText = document.getElementById("winner") as HTMLParagraphElement;

function rollDice(): number {
  return Math.floor(Math.random() * 100) + 1;
}

function determineWinner(
  player1: number,
  player2: number,
  targetNumber: number
): string {
  const diff1 = Math.abs(player1 - targetNumber);
  const diff2 = Math.abs(player2 - targetNumber);

  if (player1 === targetNumber && player2 === targetNumber) {
    return "Entrambi i giocatori hanno indovinato il numero casuale!";
  } else if (player1 === targetNumber) {
    return "Il giocatore 1 ha indovinato il numero casuale!";
  } else if (player2 === targetNumber) {
    return "Il giocatore 2 ha indovinato il numero casuale!";
  } else {
    if (diff1 < diff2) {
      return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
    } else if (diff2 < diff1) {
      return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
    } else {
      return "Nessuno dei due ha azzeccato il numero casuale, entrambi sono alla stessa distanza!";
    }
  }
}

// Prevent form submission and handle the game logic
const handleSubmit = (event: Event) => {
  event.preventDefault();

  const player1 = parseInt(player1Input.value);
  const player2 = parseInt(player2Input.value);

  if (isNaN(player1) || isNaN(player2)) {
    alert("Inserisci numeri validi per entrambi i giocatori.");
    return;
  }

  const targetNumber = rollDice();
  diceRollResult.innerText = `Numero casuale generato = ${targetNumber}`;

  const winner = determineWinner(player1, player2, targetNumber);
  winnerText.innerText = winner;
};

document.querySelector("form")?.addEventListener("submit", handleSubmit);
