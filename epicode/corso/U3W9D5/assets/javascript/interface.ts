interface Smartphone {
  numeroTelefono: string;
  carica: number;
  numeroChiamate: number;

  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
}

function updateCredit() {
  const credit = document.getElementById("credit");
  if (credit) {
    credit.innerText = `${FirstUser.carica.toFixed(2)}`;
  }
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  numeroTelefono: string;
  carica: number = 0;
  numeroChiamate: number;

  constructor(
    nome: string,
    cognome: string,
    numeroTelefono: string,
    carica: number,
    numeroChiamate: number
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.numeroTelefono = numeroTelefono;
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
    console.log(
      `Ricarica effettuata. Nuovo saldo carica: €${this.carica.toFixed(2)}`
    );
  }

  chiamata(minutiDurata: number): void {
    if (this.carica >= minutiDurata) {
      const costoChiamata = minutiDurata * 0.2;
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      console.log(`Chiamata effettuata per ${minutiDurata} minuti.`);
      console.log(`Costo della chiamata: €${costoChiamata.toFixed(2)}`);
      console.log(`Saldo carica rimanente: €${this.carica.toFixed(2)}`);
    } else {
      console.log(`Saldo carica insufficiente per effettuare la chiamata.`);
    }
  }

  numero404(): void {
    console.log(`${this.carica.toFixed(2)}`);
  }

  getNumeroChiamate(): void {
    console.log(`Cronologia chiamate: ${this.numeroChiamate}`);
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log(`Cronologia chiamate cancellata.`);
  }
}

const FirstUser = new User("Stefano", "Miceli", "123-456-7890", 0, 0);
// console.log(`User: ${FirstUser.nome} ${FirstUser.cognome}`);
// FirstUser.chiamata(5);
// console.log(`Cronologia chiamate: ${FirstUser.getNumeroChiamate()}`);
// FirstUser.azzeraChiamate();

const credit = document.getElementById("credit") as HTMLDivElement;

function addcredit(amount: number): void {
  FirstUser.carica += amount;
  credit.innerText = `${FirstUser.carica.toFixed(2)}`;
}

function call(contact: string): void {
  switch (contact) {
    case "Stefano Miceli":
      console.log(`Chiamando ${contact}`);
      break;
    case "404":
      console.log(`Chiamando ${contact}`);
      break;
    case "Dario Del Giudice":
      console.log(`Chiamando ${contact}`);
      break;
  }
}

let callCounterInterval: any | undefined;

function startCall(): void {
  let seconds = 0;

  callCounterInterval = setInterval(() => {
    const duration = document.getElementById("duration") as HTMLDivElement;
    if (FirstUser.carica < 0.1) {
      clearInterval(callCounterInterval);
      duration.innerText = "Chiamata Terminata (Credito insufficiente)";
    } else {
      seconds++;
      if (duration) {
        duration.innerText = `Durata: ${seconds} seconds`;
      }

      FirstUser.carica -= 0.2;

      if (FirstUser.carica < 0) {
        clearInterval(callCounterInterval);
        console.log("Chiamata Terminata (Credito insufficiente)");
      }
    }
  }, 1000);
}

function endCall(): void {
  if (callCounterInterval) {
    clearInterval(callCounterInterval);
    FirstUser.numeroChiamate++;
    console.log("Chiamata Terminata");
  }
}

startCall();

setTimeout(endCall, 10000);
