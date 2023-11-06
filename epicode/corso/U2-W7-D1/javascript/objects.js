// 1. Crea una classe User per la creazione di oggetti di tipo “utente”.
// Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
// -firstName
// -lastName
// -age
// -location
// Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.
// Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.
// Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static userAgeComparison(user1, user2) {
    if (user1.age === user2.age) {
      return `${user1.firstName} e ${user2.firstName} sono coetanei.`;
    } else if (user1.age > user2.age) {
      return `${user1.firstName} è più grande di ${user2.firstName}.`;
    } else {
      return `${user1.firstName} è più giovane di ${user2.firstName}.`;
    }
  }
}

let newUser = new User("Antonio", "Bertuccio", 31, "Siracusa");

const users = [
  new User("Leonardo", "Da Vinci", 31, "Florence"),
  new User("Vincent", "Van Gogh", 37, "Arles"),
  new User("Pablo", "Picasso", 91, "Barcelona"),
  new User("Frida", "Kahlo", 47, "Mexico City")
];

console.log(User.userAgeComparison(newUser, users[0]));

// 2. Crea un form per la creazione di oggetti “Pet” (animali domestici).
// La classe Pet dovrà essere dotata delle seguenti proprietà:
// -petName
// -ownerName
// -species // (cane, gatto, coniglio etc.)
// -breed // (labrador, soriano, nano etc.)
// Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone.
// Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static haveSameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

let recentRequests = [];

function addUserRequest(pet) {
  const requests = document.getElementById("pending-requests");
  const request = document.createElement("li");
  request.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;

  for (const pendingRequest of recentRequests) {
    if (Pet.haveSameOwner(pet, pendingRequest)) {
      request.style.color = "red";
      request.textContent =
        "Hai già effettuato una richiesta di shelter per un tuo pet. Attendi di essere ricontattato.";
    }
  }

  recentRequests.push(pet);

  requests.appendChild(request);
  console.log("recentRequests:", recentRequests);
}

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  let newPet = new Pet(petName, ownerName, species, breed);

  document.getElementById("petForm").reset();

  addUserRequest(newPet);
});
