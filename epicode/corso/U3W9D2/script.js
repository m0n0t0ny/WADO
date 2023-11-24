var initiateAccount = document.getElementById("initiate-account");
var initiateAccountBtn = document.getElementById("initiate-account-btn");
initiateAccountBtn.addEventListener("click", function () { });
var Account = /** @class */ (function () {
    function Account(_account, _initialBalance, _interests) {
        this.balanceInit = 0;
        this.interests = 0;
        this.account = _account;
        this.balanceInit = _initialBalance;
        this.interests = _interests;
    }
    Account.prototype.balance = function () {
        return this.balanceInit * this.interests;
    };
    Account.prototype.deposit = function (_amount) {
        console.log("".concat(this.account, " - Saldo contabile: ").concat(this.balanceInit, "\u20AC"));
        this.balanceInit = this.balance() + _amount;
        console.log("".concat(this.account, " - Somma depositata: ").concat(_amount, "\u20AC"));
        console.log("".concat(this.account, " - Saldo aggiornato: ").concat(this.balanceInit - this.balance(), "\u20AC"));
        console.log("------------------------------");
    };
    Account.prototype.withdraw = function (_amount) {
        if (_amount <= this.balanceInit - this.balance()) {
            console.log("".concat(this.account, " - Saldo contabile: ").concat(this.balanceInit, "\u20AC"));
            this.balanceInit = this.balance() - _amount;
            console.log("".concat(this.account, " - Somma prelevata: ").concat(_amount, "\u20AC"));
            console.log("".concat(this.account, " - Saldo aggiornato: ").concat(this.balanceInit - this.balance(), "\u20AC"));
            console.log("------------------------------");
        }
        else {
            console.log("Saldo insufficiente.");
            console.log("------------------------------");
        }
    };
    return Account;
}());
// const SonAccount = new Account("SonAccount 👦", 0, 0);
// SonAccount.deposit(300);
// SonAccount.withdraw(200);
// const MotherAccount = new Account("MotherAccount 👩", 0, 0.1);
// MotherAccount.deposit(300);
// MotherAccount.withdraw(200);
