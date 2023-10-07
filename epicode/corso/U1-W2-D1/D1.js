/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
  Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 Esercizio 1");
console.log("I datatype in ECMAScript 2015 possono essere:");
console.log(
  "String: è un valore che può essere composto da letteri, numeri e simboli, purchè questi siano racchiusi fra virgolette."
);
console.log('✅ x1 = "ciao";');
console.log('✅ x2 = "Il risultato è 3,3!";');
console.log("Number: è un valore espresso in numeri interi o decimali.");
console.log("✅ x3 = 44;");
console.log("✅ x4 = 3,14;");
console.log("Boolean: è un valore che può essere solo true o false.");
console.log("✅ x5 = true;");
console.log("✅ x6 = false;");
console.log("Undefined: è un vaolre che non è ancora stato definito.");
console.log("✅ let x7;");
console.log(
  "Null: è un valore intenzionalmente non definito, o meglio, temporaneamente definito come null e che verrà dichiarato in un momento successivo."
);
console.log("✅ x8 = null;");
console.log(
  "Symbol:  è un valore molto poco utilizzato, rappresentato da un simbolo generato autonomamente e sempre nuovo."
);
console.log("const sym1 = Symbol();");

/* ESERCIZIO 2
  Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 Esercizio 2");
console.log('const name = "Antonio"');
const name = "Antonio";
console.log("console.log(name)");
console.log("✅ " + name);

/* ESERCIZIO 3
  Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 Esercizio 3");
console.log("Possiamo sommare i numeri 12 e 20 in diversi modi, per esempio:");

console.log("--- Direttamente da console");
console.log("console.log(12 + 20)");
console.log("✅ " + (12 + 20));

console.log("--- Con let");
console.log("let num1;");
let num1;
console.log("num1 = 12;");
num1 = 12;
console.log("let num2;");
let num2;
console.log("num2 = 20;");
num2 = 20;
console.log("let num3 = num1 + num2;");
let num3 = num1 + num2;
console.log("console.log(num3);");
console.log("✅ " + num3);

console.log("--- Con const");
console.log("const num4 = 12;");
const num4 = 12;
console.log("const num5 = 20;");
const num5 = 20;
console.log("const num6 = num4 + num5;");
const num6 = num4 + num5;
console.log("console.log(num6);");
console.log("✅ " + num6);

/* ESERCIZIO 4
  Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 Esercizio 4");
console.log(
  "È possibile assegnare dei valori alle variabili, per esempio, per richiamare più volte la variabile x possiamo dichiararne il valore come segue:"
);
console.log("const x = 12;");
const x = 12;
console.log("console.log(x);");
console.log("✅ " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 Esercizio 5");
console.log(
  "Il valore delle variabili let sono riassegnabili, mentre quelle delle variabili dichiarate con const non possono essere dichiarate una seconda volta ma manterrano sempre il primo valore assegnato"
);
console.log(
  "Se volessimo riassegnare un valore alla variabile const 'nome' già dichiarata in precedenza, riceveremmo un errore in output dalla console:"
);
console.log("name = 'Bertuccio';");
console.log("console.log(name = 'Bertuccio');");
console.log(
  "✅ Uncaught TypeError: Assignment to constant variable. at D1.js:111:6"
);

/* ESERCIZIO 6
  Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 Esercizio 6");
console.log(
  "È possibile eseguire operazioni fra valori non dichiarati e variabili."
);
console.log(
  "Per esempio potremmo sottrarre il numero 4 alla variabile 'x' dichiarata in precedenza:"
);
console.log("console.log(4 - x);");
console.log("✅ " + (4 - x));

/* ESERCIZIO 7
  Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
  Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
  EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("🔹 Esercizio 7");
console.log(
  "Gli operatori comparativi vengono utilizzati per determinare l'uguaglianza o la differenza tra variabili o valori e possono quindi restituire solamente i valori booleani true e false."
);
console.log('In un esempio compariamo i valori dichiarati "john" e "John":');
console.log('const name1 = "john";');
const name1 = "john";
console.log('const name2 = "John";');
const name2 = "John";
console.log("console.log(name1 !== name2);");
console.log("✅ " + (name1 !== name2));
console.log("console.log(name1 === name2.toLowerCase());");
console.log("✅ " + (name1.toLowerCase() === name2.toLowerCase()));
