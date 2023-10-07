/* ESERCIZIO 1
  Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

console.log("🔹 ESERCIZIO 1");

function area(l1, l2) {
  return l1 * l2;
}

console.log("area:", area(2, 4));

/* ESERCIZIO 2
  Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
  La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
  la loro somma moltiplicata per tre.
*/

console.log("🔹 ESERCIZIO 2");

function crazySum(param1, param2) {
  if (param1 != param2) {
    return param1 + param2;
  } else {
    return (param1 + param2) * 3;
  }
}

console.log("crazySum:", crazySum(5, 6));

/* ESERCIZIO 3
  Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
  Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("🔹 ESERCIZIO 3");

function crazyDiff(a) {
  return Math.abs(a - 19);
}

console.log("crazyDiff:", crazyDiff(2));

/* ESERCIZIO 4
  Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
  se n è uguale a 400.
*/

console.log("🔹 ESERCIZIO 4");

function boundary(n) {
  if (Number.isInteger(n)) {
    console.log("boundary:", n, "è un numero intero!");
    if (n >= 20 && n <= 100) {
      return console.log("boundary:", true);
    } else if (n === 400) {
      return console.log("boundary:", true);
    } else {
      console.log(
        "boundary:",
        n,
        "non è compreso fra 20 e 100 e non è uguale a 400"
      );
    }
  } else {
    console.log("boundary:", n, "non è un numero intero!");
  }
}
boundary(19.5);

/* ESERCIZIO 5
  Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
  La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
  ritornare la stringa originale senza alterarla.
*/
console.log("🔹 ESERCIZIO 5");

function epify(myString) {
  if (typeof myString === "string") {
    if (myString === "EPICODE") {
      return "epify:", myString;
    } else {
      let epicode = "EPICODE";
      return epicode.concat(" ", myString);
    }
  } else {
    return "non è una stringa";
  }
}

console.log(epify("ciao"));

/* ESERCIZIO 6
  Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
  di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("🔹 ESERCIZIO 6");

function check3and7(num3) {
  if (num3 > 0) {
    if (num3 % 3 === 0) {
      if (num3 % 7 === 0) {
        console.log(num3, "è multiplo sia di 3 che di 7.");
      } else {
        console.log(num3, "è multiplo di 3.");
      }
    } else if (num3 % 7 === 0) {
      console.log(num3, "è multiplo di 7");
    } else {
      console.log(
        num3,
        "è un numero positivo ma non è multiplo né di 3 né di 7"
      );
    }
  } else {
    console.log(num3, "non è un numero positivo");
  }
}

check3and7(21);

/* ESERCIZIO 7
  Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("🔹 ESERCIZIO 7");

// function reverseString(str) {
//   let magicHappen = str.split("");
//   magicHappen = magicHappen.reverse();
//   magicHappen = magicHappen.join("");
//   return magicHappen;
// }

const reverseString = function (str) {
  return str.split("").reverse().join("");
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
  Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
  La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("🔹 ESERCIZIO 8");

const upperFirst = "ciao sono antonio, studente epicode!";
const word = upperFirst.split(" ");

for (let i = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].substring(1);
}

console.log(word.join(" "));

/* ESERCIZIO 9
  Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
  della stringa originale.
*/

console.log("🔹 ESERCIZIO 9");

const cutString = function (elloworl) {
  elloworl = elloworl.slice(1, -1);
  return elloworl;
};
let elloworl = cutString("Hello World");
console.log(elloworl);

/* ESERCIZIO 10
  Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("🔹 ESERCIZIO 10");

const giveMeRandom = function (n) {
  if (typeof n === "number") {
    let yourLuckyNumbers = [];
    for (let i = 0; i < n - 1; i++) {
      yourLuckyNumbers[i] = Math.floor(Math.random() * 10);
      yourLuckyNumbers.push(yourLuckyNumbers[i]);
    }
    return yourLuckyNumbers;
  }
  return "devi inserire un numero!";
};
let giveMeLuckyNumbers = giveMeRandom(3);
console.log(giveMeLuckyNumbers);
