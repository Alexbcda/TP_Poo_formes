//class Parrallelogramme extends Forme {
  //  private _hauteur: number;
   // private _cote: number;

   //public aire() : number{
     //  return 0;//??;
   //}
//}

class Parallelogramme implements Forme {
    private _base: number; // Attribut : longueur de la base du parallélogramme
    private _hauteur: number; // Attribut : hauteur du parallélogramme
    private _coteA: number; // Attribut : longueur du côté A du parallélogramme
    private _coteB: number; // Attribut : longueur du côté B du parallélogramme

    constructor(base: number, hauteur: number, coteA: number, coteB: number) {
        this._base = base;
        this._hauteur = hauteur;
        this._coteA = coteA;
        this._coteB = coteB;

        // Vérification pour s'assurer que les côtés et la base forment un parallélogramme valide
        if (!this.estParallelogrammeValide()) {
            throw new Error("Les dimensions ne forment pas un parallélogramme valide.");
        }
    }

    private estParallelogrammeValide(): boolean {
        // Vérifiez si les dimensions sont positives
        if (this._base <= 0 || this._hauteur <= 0 || this._coteA <= 0 || this._coteB <= 0) {
            return false;
        }

        // Autres conditions de validation pour un parallélogramme

        return true;
    }

    public aire(): number {
        // Utilisez la formule (base * hauteur) pour calculer l'aire
        return this._base * this._hauteur;
    }

    public perimetre(): number {
        // Calculez le périmètre en additionnant les longueurs des côtés du parallélogramme
        return 2 * (this._coteA + this._coteB);
    }

    // Getter pour obtenir la valeur de la base
    get base(): number {
        return this._base;
    }

    // Setter pour définir la valeur de la base
    set base(base: number) {
        if (base <= 0) {
            throw new Error("La base doit être positive.");
        }
        this._base = base;
    }

    // Getter pour obtenir la valeur de la hauteur
    get hauteur(): number {
        return this._hauteur;
    }

    // Setter pour définir la valeur de la hauteur
    set hauteur(hauteur: number) {
        if (hauteur <= 0) {
            throw new Error("La hauteur doit être positive.");
        }
        this._hauteur = hauteur;
    }

    // Getter pour obtenir la valeur du côté A
    get coteA(): number {
        return this._coteA;
    }

    // Setter pour définir la valeur du côté A
    set coteA(coteA: number) {
        if (coteA <= 0) {
            throw new Error("Le côté A doit être positif.");
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
            throw new Error("Le côté B doit être positif.");
        }
        this._coteB = coteB;
    }
}

// Exemple d'utilisation de la classe Parallelogramme
try {
    const base = 8; // Remplacez par la longueur de la base souhaitée
    const hauteur = 6; // Remplacez par la hauteur souhaitée
    const coteA = 5; // Remplacez par la longueur du côté A souhaitée
    const coteB = 5; // Remplacez par la longueur du côté B souhaitée

    const parallelogramme = new Parallelogramme(base, hauteur, coteA, coteB);
    const aireParallelogramme = parallelogramme.aire();
    const perimetreParallelogramme = parallelogramme.perimetre();

    console.log("Longueur de la base du parallélogramme : " + parallelogramme.base);
    console.log("Hauteur du parallélogramme : " + parallelogramme.hauteur);
    console.log("Longueur du côté A du parallélogramme : " + parallelogramme.coteA);
    console.log("Longueur du côté B du parallélogramme : " + parallelogramme.coteB);
    console.log("Aire du parallélogramme : " + aireParallelogramme);
    console.log("Périmètre du parallélogramme : " + perimetreParallelogramme);

    // Utilisation des getters et setters
    parallelogramme.base = 10; // Définir une nouvelle valeur pour la base
    parallelogramme.hauteur = 7; // Définir une nouvelle valeur pour la hauteur
    parallelogramme.coteA = 6; // Définir une nouvelle valeur pour le côté A
    parallelogramme.coteB = 6; // Définir une nouvelle valeur pour le côté B
    console.log("Nouvelle longueur de la base du parallélogramme : " + parallelogramme.base);
    console.log("Nouvelle hauteur du parallélogramme : " + parallelogramme.hauteur);
    console.log("Nouvelle longueur du côté A du parallélogramme : " + parallelogramme.coteA);
    console.log("Nouvelle longueur du côté B du parallélogramme : " + parallelogramme.coteB);
} catch (error) {
    if (error instanceof Error) {
        // Si une erreur de type 'Error' est générée, affichez le message d'erreur
        console.error("Parallélogramme - Erreur : " + error.message);
    } else {
        // Si une erreur de type différent est générée, affichez un message générique
        console.error("Parallélogramme - Erreur inattendue : " + error);
    }
}
