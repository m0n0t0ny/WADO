// Template String

const myName = "Antonio";
const mySurname = "Bertuccio";
const role = "student";

const message = `My name is: ${myName} ${mySurname},
      and my role is: ${role}`;
console.log(message);

// Oggetti in JS

const myObj = {};

const valueForProperty = "height";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  hasWebcam: true,
  "e-mail": "john.doe@gmail.com",
  [valueForProperty]: 190, // proprietà generata dinamicamente dalle []. valuterà il valore contenuto nella variabile e userà quel valore per creare la proprietà
  location: { state: "italy", region: "Sicilia" },
  emptyObject: myObj
};

console.log(person);

// come si accede alle singole proprietà?
// dot notation

console.log("nome:", person.firstName);
console.log("webcam:", person.hasWebcam);
console.log("età:", person.age);

// square bracket notation
// permette di acccedere a proprietà con caratteri speciali nel nome
console.log("e-mail:", person["e-mail"]);

// o di valutare valori dinamici prima di usare il valore per accedere alla proprietà dell'oggetto
const dynamicValueEmail = "e-mail";
console.log("valore dinamico:", person[dynamicValueEmail]);
console.log("regione:", person.location.region);

// per rimmuove qualcosa all'interno di un oggetto
delete person.emptyObject;
console.log(person);

// per assegnare un nuovo valore ad un oggetto preesistente
person.hasDrivingLicense = true;
console.log("patente:", person.hasDrivingLicense);

const a = 20;
const b = a; // la primitiva contenuta nella variabile "a" viene copiata, diventano di fatto due numeri diversi a sé stanti
const c = a + b;
