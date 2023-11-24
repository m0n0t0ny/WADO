var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Taxes = /** @class */ (function () {
    function Taxes(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    return Taxes;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_professione, _codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        var _this = _super.call(this, _codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) || this;
        _this.professione = _professione;
        return _this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * 0.8;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    };
    return Lavoratore;
}(Taxes));
var Professionista = new Lavoratore("Professionista", 1, 50000, 5, 25);
var Operaio = new Lavoratore("Operaio", 2, 30000, 19, 15);
var Commerciante = new Lavoratore("Commerciante", 3, 70000, 15, 35);
console.log("Professionista:");
console.log("Reddito Annuo Netto:", Professionista.getRedditoAnnuoNetto());
console.log("Artigiano:");
console.log("Reddito Annuo Netto:", Operaio.getRedditoAnnuoNetto());
console.log("Commerciante:");
console.log("Reddito Annuo Netto:", Commerciante.getRedditoAnnuoNetto());
