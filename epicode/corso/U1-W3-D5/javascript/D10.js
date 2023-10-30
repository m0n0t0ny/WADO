/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log("sum:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.ceil(Math.random() * 20);
console.log("random:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Antonio",
  surname: "Bertuccio",
  age: 31
};
console.log("me:", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log("me:", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = [
  "JavaScript Beginner: 86%",
  "CSS Beginner: 90%",
  "HTML Beginner: 85%"
];
console.log("me:", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.unshift("JavaScript Intermediate: 65%");
console.log("me:", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("me:", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  const result = Math.ceil(Math.random() * 6);
  return result;
};

console.log("random:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} è maggiore di ${num2}`;
  } else if (num2 > num1) {
    return `${num2} è maggiore di ${num1}`;
  } else if (num1 === num2) {
    return `Hai fornito due volte il numero ${num1}`;
  } else {
    return "Devi fornire 2 numeri come parametri!";
  }
};

console.log(whoIsBigger("a", 2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (myString) => {
  let myArray = [];
  myArray.push(myString.split(" "));
  return myArray;
};

console.log("splitMe:", splitMe("Epicode is draining life out of my venes!"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (myString, myBoolean) => {
  if (myBoolean === true) {
    return myString.slice(1);
  } else {
    return `${myBoolean} non è true`;
  }
};
console.log("deleteOne:", deleteOne("ePicode", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (myString) => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let newString = "";
  for (let i = 0; i < myString.length; i++) {
    const singleCharacter = myString[i];
    if (numbers.includes(singleCharacter)) {
      continue;
    }
    newString += singleCharacter;
  }
  return newString;
};

console.log(
  "onlyLetters:",
  onlyLetters("33 trentini entrarono a Trento tutti e 33 trotterellando")
);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  if (email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    return `${email} è un indirizzo email valido.`;
  } else {
    return `${email} NON è un indirizzo email valido.`;
  }
}
console.log("isThisAnEmail:", isThisAnEmail("anto.bertu@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const today = new Date();
  const daysOfTheWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato"
  ];
  const currentDay = daysOfTheWeek[today.getDay()];
  return currentDay;
}
const currentDay = whatDayIsIt();
console.log("currentDay:", currentDay);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (rolls) => {
  let arrayOfNumbers = { sum: 0 };
  for (var i = 0; i < rolls; i++) {
    console.log("rollTheDices:", dice());
    arrayOfNumbers.sum += dice();
  }
  console.log("sum:", arrayOfNumbers.sum);
};
rollTheDices(5);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) {
  const today = new Date();
  const daysDifference = Math.floor((today - date) / (1000 * 60 * 60 * 24));

  if (daysDifference < 0) {
    console.log(
      `Mancano ${Math.abs(
        daysDifference
      )} giorni al ${date.toLocaleDateString()}`
    );
  } else if (daysDifference === 0) {
    console.log(`Oggi è ${date.toLocaleDateString()}. Buon compleanno!`);
  } else {
    console.log(
      `Sono passati ${daysDifference} giorni dal ${date.toLocaleDateString()}`
    );
  }

  return daysDifference;
}

const dataInizio = new Date("2023-12-31");
const giorniTrascorsi = howManyDays(dataInizio);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (myBirthday) => {
  const today = new Date();

  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const birthday = new Date(myBirthday);
  const birthdayMonth = birthday.getMonth();
  const birthdayDay = birthday.getDate();

  return todayMonth === birthdayMonth && todayDay === birthdayDay;
};

const myBirthday = "1992-04-04";
const isBirthdayToday = isTodayMyBirthday(myBirthday);

if (isBirthdayToday) {
  console.log("Buon compleanno 🎉");
} else {
  console.log("Oggi non è il tuo compleanno.");
}

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (object, myString) => {
  delete object[myString];
  return object;
};

const myObject = {
  name: "Antonio",
  surname: "Bertuccio",
  age: 31
};

deleteProp(myObject, "age");
console.log("myObject:", myObject);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (movies) => {
  let newest = movies[0];

  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year, 10) > parseInt(newest.Year, 10)) {
      newest = movies[i];
    }
  }
  console.log("newest:", newest);
};

newestMovie(movies);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
  return movies.length;
}

const numberOfMovies = countMovies(movies);
console.log("numberOfMovies:", numberOfMovies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (movies) => {
  let yearsOnly = [];
  for (i = 0; i < movies.length; i++) {
    yearsOnly.push(movies[i].Year);
  }
  return yearsOnly;
};
console.log("onlyTheYears:", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotti nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (movies, year) => {
  const filteredMovies = movies.filter((movie) => {
    return parseInt(movie.Year) < year;
  });
  return filteredMovies;
};
const moviesBeforeYear = onlyInLastMillennium(movies, 2000);
console.log("moviesBeforeYear:", moviesBeforeYear);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
  let totalYears = 0;
  for (const movie of movies) {
    totalYears += parseInt(movie.Year, 10);
  }
  return totalYears;
}
const totalYearsInMovies = sumAllTheYears(movies);
console.log("totalYearsInMovies:", totalYearsInMovies);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (movies, searchString) => {
  const MovieTitleContainsThisString = movies.filter((movie) => {
    const lowerCaseTitle = movie.Title.toLowerCase();
    const search = searchString.toLowerCase();
    return lowerCaseTitle.includes(search);
  });
  return MovieTitleContainsThisString;
};
console.log("searchByTitle:", searchByTitle(movies, "Salem"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (searchString, movies) => {
  const match = [];
  const unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(searchString)) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }

  return { match: match, unmatch: unmatch };
};

const result = searchAndDivide("Star", movies);
console.log("unmatch:", result.unmatch);
console.log("match:", result.match);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(index, movies) {
  if (index < 0 || index >= movies.length) {
    return movies;
  }
  movies.splice(index, 1);
  return movies;
}
const indexToRemove = 2;
const updatedMovies = removeIndex(indexToRemove, movies);
console.log("updatedMovies:", updatedMovies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById("container");
container.textContent = "ESERCIZIO 20";

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const td = document.querySelectorAll("td");
td.forEach((element) => {
  element.textContent = "ESERCIZIO 21";
});
console.log("ESERCIZIO 21:", td);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const consoleAllTd = (td) => {
  td.forEach((element) => {
    console.log("ESERCIZIO 22:", element.textContent);
  });
};

consoleAllTd(td);

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const link = document.querySelector("a");
link.style.backgroundColor = "black";
link.style.color = "white";

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const ul = document.getElementById("myList"); // Remove the '#' symbol
const newLi = document.createElement("li");
newLi.innerText = "ESERCIZIO 24";
ul.appendChild(newLi);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const allLi = document.querySelectorAll("li");
for (let i = 0; i < allLi.length; i++) {
  ul.removeChild(allLi[i]);
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const tr = document.querySelectorAll("tr");
tr.forEach((element) => {
  element.classList.add("css");
});

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
