// STRING - "Antonio", "Bertuccio"
// NUMBER - 100, 44 , 7
// BOOLEAN - true / false
// UNDEFINED - variabile non ancora dichiarata
// NULL - rappresenta l'assenza intenzionale di un valore, che verrà verosimilmente inserito in un momento successivo
// SYMBOL - entità singola, molto poco utilizzata

// console.log(typeof myVar); per conoscere il tuipo di variabile

// Si può dichiarare una variabile come null, temporaneamente, per poi dichiararla in un secondo momento
let myNum = null;
myNum = 10;
console.log("🚀 ~ file: script.js:13 ~ myNum:", myNum);

let num1 = 10;
let num2 = 20;
let num3 = num1;
console.log("🚀 ~ file: script.js:17 ~ num1:", num1);
let num4 = num1 + num2;
console.log("🚀 ~ file: script.js:20 ~ num4:", num4);

// Non si può dichiarare nuovamente una variabile ma le si può assegnare un nuovo valore
let animal = "cat";
animal = "dog";
console.log("🚀 ~ file: script.js:24 ~ animal:", animal);

// Operatore modulo
console.log("resto della divisione (modulo):", 44 % 6);

// Operatori di assegnazione
// Gli operatori di assegnazione assegnano valori alle variabili JavaScript.

// L’operatore di assegnazione (=) assegna un valore a una variabile.
let x0 = 10;
console.log("🚀 ~ file: script.js:35 ~ x0:", x0);

// L’operatore di assegnazione += aggiunge un valore a una variabile.
let x1 = 15;
x1 += 5; // x=x+5 = 20
console.log("🚀 ~ file: script.js:40 ~ x1:", x1);

// L’operatore di assegnazione -= sottrae un valore da una variabile.
let x2 = 15;
x2 -= 5; //x=x-5 = 10
console.log("🚀 ~ file: script.js:45 ~ x2:", x2);

// L’operatore di assegnazione *= moltiplica una variabile.
let x3 = 10;
x3 *= 5; // x=x*5 = 50
console.log("🚀 ~ file: script.js:50 ~ x3:", x3);

// L’assegnazione /= divide una variabile.
let x4 = 15;
x4 /= 5; //x = x / 5 = 3
console.log("🚀 ~ file: script.js:55 ~ x4:", x4);

// L’operatore di assegnazione %= assegna un resto a una variabile.
let x5 = 15;
x5 %= 5; // x = x % 5 = 0
console.log("🚀 ~ file: script.js:60 ~ x5:", x5);
