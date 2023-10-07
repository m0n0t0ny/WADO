/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 1");

const num1 = 3;
const num2 = 3;

if (num1 > num2) {
  console.log(`${num1} è il numero maggiore`);
} else if (num2 > num1) {
  console.log(`${num2} è il numero maggiore`);
} else {
  console.log(`I numeri "${num1}" e "${num2}" sono uguali.`);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 2");

const num3 = 5;
const NotEqual =
  num3 != 5
    ? console.log(`${num3} è diverso da 5`)
    : console.log(`${num3} è uguale a 5`);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 3");

const num4 = 10;
const fiveOrMultiple =
  num4 % 5
    ? console.log(`${num4} non è divisibile per 5`)
    : console.log(`${num4} è divisibile per 5`);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 4");

const num5 = 9;
const num6 = 1;

if (num5 === 8 || num6 === 8) {
  console.log("Uno dei 2 numeri è 8");
} else if (num5 + num6 === 8) {
  console.log("La somma dei due numeri è 8");
} else if (num5 - num6 === 8 || num6 - num5 === 8) {
  console.log(`${num5} - ${num6} fa 8`);
} else {
  console.log(
    "Nessuno dei 2 numeri è 8, nè la somma nè la differenza dei 2 numeri da 8 come risultato"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 5");

let totalShoppingCart = 60;
let shippingCost = 10;
let spendThisForFreeShipping = 50;
let proceedToCheckout =
  totalShoppingCart >= spendThisForFreeShipping
    ? console.log(`TOT: ${totalShoppingCart}€ con spedizione gratuita!`)
    : console.log(
        `TOT: ${totalShoppingCart}€ + ${shippingCost}€ di spese di spedizione)`
      );

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 6");

const blackFriday = 20;
const promoActive = blackFriday > 0 ? true : false;
const promoNow =
  promoActive === true
    ? console.log(`C'è il ${blackFriday}% di sconto su tutti i prodotti!`)
    : console.log(
        `spendendo almeno ${spendThisForFreeShipping}€ otterrai la spedizione gratuita!`
      );
const blackFridayPrice =
  totalShoppingCart - (totalShoppingCart / 100) * blackFriday;

totalShoppingCart =
  promoActive === true
    ? totalShoppingCart - (totalShoppingCart / 100) * blackFriday
    : totalShoppingCart;

proceedToCheckout =
  totalShoppingCart >= spendThisForFreeShipping
    ? console.log(`TOT: ${totalShoppingCart}€ con spedizione gratuita!`)
    : console.log(
        `TOT: ${totalShoppingCart}€ + ${shippingCost}€ di spese di spedizione`
      );

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 7");

const x1 = 22;
const x2 = 20;
const x3 = 18;

if (x1 > x2 && x1 > x3) {
  console.log(`${x1} è più grande di ${x2} e ${x3}`);
} else if (x2 > x1 && x2 > x3) {
  console.log(`${x2} è più grande di ${x1} e ${x3}`);
} else if (x3 > x1 && x3 > x2) {
  console.log(`${x3} è più grande di ${x1} e ${x2}`);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 8");

let misteriousData = 8 === 9;
const datatType = typeof misteriousData;

if (datatType === "number") {
  console.log(`${misteriousData} è un valore number`);
} else if (datatType === "string") {
  console.log(`${misteriousData} è un valore string`);
} else if (datatType === "boolean") {
  console.log(`${misteriousData} è un valore boolean`);
} else {
  console.log(
    `${misteriousData} non è né un number né una string né un boolean`
  );
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 9");

const misteriousNumber = 5;
const oddOrEven =
  misteriousNumber % 2 == 0
    ? console.log(`${misteriousNumber} è un numero pari`)
    : console.log(`${misteriousNumber} è un numero dispari`);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 10");

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Maggiore di 5");
} else {
  console.log("È un valore compreso fra 5 e 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 11");

me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 12");

console.log(me.lastName);
delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 13");

console.log(me.skills[2]);
me.skills.pop();
console.log(me.skills[2]);
// delete me.skills.[me.skills.lenght - 1];

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 14");

const numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 ESERCIZIO 15");

numbers.pop();
numbers.push(100);
console.log(numbers);
