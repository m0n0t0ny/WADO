abstract class Tasse {
  codRedd: number;
  redditoAnnuoLordo: number;
  tasseInps: number;
  tasseIrpef: number;

  constructor(
    _codRedd: number,
    _redditoAnnuoLordo: number,
    _tasseInps: number,
    _tasseIrpef: number
  ) {
    this.codRedd = _codRedd;
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
    this.tasseInps = _tasseInps;
    this.tasseIrpef = _tasseIrpef;
  }

  abstract getUtileTasse(): number | string;
  abstract getTasseInps(): number | string;
  abstract getTasseIrpef(): number | string;
  abstract getRedditoAnnuoNetto(): number | string;
}

class Lavoratore extends Tasse {
  professione: string;

  constructor(
    _professione: string,
    _codRedd: number,
    _redditoAnnuoLordo: number,
    _tasseInps: number,
    _tasseIrpef: number
  ) {
    super(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef);
    this.professione = _professione;
  }

  getUtileTasse(): number {
    return this.redditoAnnuoLordo * 0.8;
  }

  getTasseInps(): number {
    return (this.getUtileTasse() * this.tasseInps) / 100;
  }

  getTasseIrpef(): number {
    return (this.getUtileTasse() * this.tasseIrpef) / 100;
  }

  getRedditoAnnuoNetto(): number {
    return this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
  }
}

const Professionista = new Lavoratore("Professionista", 1, 50000, 5, 25);
const Artigiano = new Lavoratore("Artigiano", 2, 30000, 19, 15);
const Commerciante = new Lavoratore("Commerciante", 3, 70000, 15, 35);

console.log("Professionista:");
console.log("Reddito Annuo Netto:", Professionista.getRedditoAnnuoNetto());

console.log("Artigiano:");
console.log("Reddito Annuo Netto:", Artigiano.getRedditoAnnuoNetto());

console.log("Commerciante:");
console.log("Reddito Annuo Netto:", Commerciante.getRedditoAnnuoNetto());
