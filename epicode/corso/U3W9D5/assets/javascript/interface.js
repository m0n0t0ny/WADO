function updateCredit() {
    var credit = document.getElementById("credit");
    if (credit) {
        credit.innerText = "".concat(FirstUser.carica.toFixed(2));
    }
}
var User = /** @class */ (function () {
    function User(nome, cognome, numeroTelefono, carica, numeroChiamate) {
        this.carica = 0;
        this.nome = nome;
        this.cognome = cognome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
        console.log("Ricarica effettuata. Nuovo saldo carica: \u20AC".concat(this.carica.toFixed(2)));
    };
    User.prototype.chiamata = function (minutiDurata) {
        if (this.carica >= minutiDurata) {
            var costoChiamata = minutiDurata * 0.2;
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log("Chiamata effettuata per ".concat(minutiDurata, " minuti."));
            console.log("Costo della chiamata: \u20AC".concat(costoChiamata.toFixed(2)));
            console.log("Saldo carica rimanente: \u20AC".concat(this.carica.toFixed(2)));
        }
        else {
            console.log("Saldo carica insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.numero404 = function () {
        console.log("".concat(this.carica.toFixed(2)));
    };
    User.prototype.getNumeroChiamate = function () {
        console.log("Cronologia chiamate: ".concat(this.numeroChiamate));
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("Cronologia chiamate cancellata.");
    };
    return User;
}());
var FirstUser = new User("Stefano", "Miceli", "123-456-7890", 0, 0);
// console.log(`User: ${FirstUser.nome} ${FirstUser.cognome}`);
// FirstUser.chiamata(5);
// console.log(`Cronologia chiamate: ${FirstUser.getNumeroChiamate()}`);
// FirstUser.azzeraChiamate();
var credit = document.getElementById("credit");
function addcredit(amount) {
    FirstUser.carica += amount;
    credit.innerText = "".concat(FirstUser.carica.toFixed(2));
}
function call(contact) {
    switch (contact) {
        case "Stefano Miceli":
            console.log("calling ".concat(contact));
            break;
        case "404":
            console.log("calling ".concat(contact));
            break;
        case "Dario Del Giudice":
            console.log("calling ".concat(contact));
            break;
    }
}
var callCounterInterval;
function startCall() {
    var seconds = 0;
    callCounterInterval = setInterval(function () {
        var duration = document.getElementById("duration");
        if (FirstUser.carica < 0.1) {
            clearInterval(callCounterInterval);
            duration.innerText = "Call Ended (insufficient charge)";
        }
        else {
            seconds++;
            if (duration) {
                duration.innerText = "Durata: ".concat(seconds, " seconds");
            }
            FirstUser.carica -= 0.2;
            if (FirstUser.carica < 0) {
                clearInterval(callCounterInterval);
                console.log("Call Ended (insufficient charge)");
            }
        }
    }, 1000);
}
function endCall() {
    if (callCounterInterval) {
        clearInterval(callCounterInterval);
        FirstUser.numeroChiamate++;
        console.log("Call Ended");
    }
    else {
        console.log("No active call to end.");
    }
}
startCall();
setTimeout(endCall, 10000);
