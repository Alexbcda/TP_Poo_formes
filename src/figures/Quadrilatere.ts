//class Quadrilatere extends Forme {
  //  private _cote1: number;
   // private _cote2: number;
    //private _cote3: number;
    //private _cote4: number;


   //public aire() : number{
     //  return 0;//??;
   //}
//}

class Quadrilatere implements Forme {
    private _coteA: number; // Attribut : longueur du côté A du quadrilatère
    private _coteB: number; // Attribut : longueur du côté B du quadrilatère
    private _coteC: number; // Attribut : longueur du côté C du quadrilatère
    private _coteD: number; // Attribut : longueur du côté D du quadrilatère

    constructor(coteA: number, coteB: number, coteC: number, coteD: number) {
        this._coteA = coteA;
        this._coteB = coteB;
        this._coteC = coteC;
        this._coteD = coteD;

        // Vérification pour s'assurer que les côtés forment un quadrilatère valide
        if (!this.estQuadrilatereValide()) {
            throw new Error("Les dimensions ne forment pas un quadrilatère valide.");
        }
    }

    private estQuadrilatereValide(): boolean {
        // Vérifiez si les dimensions sont positives
        if (this._coteA <= 0 || this._coteB <= 0 || this._coteC <= 0 || this._coteD <= 0) {
            return false;
        }

        // Autres conditions de validation pour un quadrilatère

        return true;
    }

    public aire(): number {
        // Implémentez le calcul de l'aire pour un quadrilatère
        // (peut dépendre du type de quadrilatère, par exemple, un rectangle, un carré, un parallélogramme, etc.)
        // Vous devez implémenter la logique appropriée ici.
        return 0;
    }

    public perimetre(): number {
        // Calculez le périmètre en additionnant les longueurs des côtés du quadrilatère
        return this._coteA + this._coteB + this._coteC + this._coteD;
    }

    // Getter pour obtenir la valeur du côté A
    get coteA(): number {
        return this._coteA;
    }

    // Setter pour définir la valeur du côté A
    set coteA(coteA: number) {
        if (coteA <= 0) {
            throw new Error("La longueur du côté A doit être positive.");
        }
        this._coteA = coteA;
    }

    // Getter pour obtenir la valeur du côté B
    get coteB(): number {
        return this._coteB;
    }

    // Setter pour définir la valeur du côté B
    set coteB(coteB: number) {
        if (coteB <= 0) {
            throw new Error("La longueur du côté B doit être positive.");
        }
        this._coteB = coteB;
    }

    // Getter pour obtenir la valeur du côté C
    get coteC(): number {
        return this._coteC;
    }

    // Setter pour définir la valeur du côté C
    set coteC(coteC: number) {
        if (coteC <= 0) {
            throw new Error("La longueur du côté C doit être positive.");
        }
        this._coteC = coteC;
    }

    // Getter pour obtenir la valeur du côté D
    get coteD(): number {
        return this._coteD;
    }

    // Setter pour définir la valeur du côté D
    set coteD(coteD: number) {
        if (coteD <= 0) {
            throw new Error("La longueur du côté D doit être positive.");
        }
        this._coteD = coteD;
    }
}

// Exemple d'utilisation de la classe Quadrilatere
try {
    const coteA = 5; // Remplacez par la longueur du côté A souhaitée
    const coteB = 4; // Remplacez par la longueur du côté B souhaitée
    const coteC = 6; // Remplacez par la longueur du côté C souhaitée
    const coteD = 3; // Remplacez par la longueur du côté D souhaitée

    const quadrilatere = new Quadrilatere(coteA, coteB, coteC, coteD);
    const perimetreQuadrilatere = quadrilatere.perimetre();

    console.log("Longueur du côté A du quadrilatère : " + quadrilatere.coteA);
    console.log("Longueur du côté B du quadrilatère : " + quadrilatere.coteB);
    console.log("Longueur du côté C du quadrilatère : " + quadrilatere.coteC);
    console.log("Longueur du côté D du quadrilatère : " + quadrilatere.coteD);
    console.log("Périmètre du quadrilatère : " + perimetreQuadrilatere);

    // Utilisation des getters et setters
    quadrilatere.coteA = 6; // Définir une nouvelle valeur pour le côté A
    quadrilatere.coteB = 5; // Définir une nouvelle valeur pour le côté B
    quadrilatere.coteC = 7; // Définir une nouvelle valeur pour le côté C
    quadrilatere.coteD = 4; // Définir une nouvelle valeur pour le côté D
    console.log("Nouvelle longueur du côté A du quadrilatère : " + quadrilatere.coteA);
    console.log("Nouvelle longueur du côté B du quadrilatère : " + quadrilatere.coteB);
    console.log("Nouvelle longueur du côté C du quadrilatère : " + quadrilatere.coteC);
    console.log("Nouvelle longueur du côté D du quadrilatère : " + quadrilatere.coteD);
} catch (error) {
    if (error instanceof Error) {
        // Si une erreur de type 'Error' est générée, affichez le message d'erreur
        console.error("Quadrilatere - Erreur : " + error.message);
    } else {
        // Si une erreur de type différent est générée, affichez un message générique
        console.error("Quadrilatere - Erreur inattendue : " + error);
    }
}
