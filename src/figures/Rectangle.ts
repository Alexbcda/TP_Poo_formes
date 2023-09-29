//class Rectangle extends Forme {
  //  private _longeurCote: number;
    //private _largeurCote: number;

   //public aire() : number{
     //  return 0;//??;
   //}
//}

class Rectangle implements Forme {
    private _longueur: number; // Attribut : longueur du rectangle
    private _largeur: number; // Attribut : largeur du rectangle

    constructor(longueur: number, largeur: number) {
        if (longueur <= 0 || largeur <= 0) {
            throw new Error("Les dimensions doivent être positives.");
        }
        this._longueur = longueur;
        this._largeur = largeur;
    }

    public aire(): number {
        return this._longueur * this._largeur;
    }

    public perimetre(): number {
        return 2 * (this._longueur + this._largeur);
    }

    // Getter pour obtenir la valeur de la longueur
    get longueur(): number {
        return this._longueur;
    }

    // Setter pour définir la valeur de la longueur
    set longueur(longueur: number) {
        if (longueur <= 0) {
            throw new Error("La longueur doit être positive.");
        }
        this._longueur = longueur;
    }

    // Getter pour obtenir la valeur de la largeur
    get largeur(): number {
        return this._largeur;
    }

    // Setter pour définir la valeur de la largeur
    set largeur(largeur: number) {
        if (largeur <= 0) {
            throw new Error("La largeur doit être positive.");
        }
        this._largeur = largeur;
    }
}

// Exemple d'utilisation de la classe Rectangle
try {
    const longueurRectangle = 5; // Remplacez par la longueur souhaitée
    const largeurRectangle = 3; // Remplacez par la largeur souhaitée

    const rectangle = new Rectangle(longueurRectangle, largeurRectangle);
    const aireRectangle = rectangle.aire();
    const perimetreRectangle = rectangle.perimetre();

    console.log("Longueur du rectangle : " + rectangle.longueur);
    console.log("Largeur du rectangle : " + rectangle.largeur);
    console.log("Aire du rectangle : " + aireRectangle);
    console.log("Périmètre du rectangle : " + perimetreRectangle);

    // Utilisation des getters et setters
    rectangle.longueur = 7; // Définir une nouvelle valeur pour la longueur
    rectangle.largeur = 4; // Définir une nouvelle valeur pour la largeur
    console.log("Nouvelle longueur du rectangle : " + rectangle.longueur);
    console.log("Nouvelle largeur du rectangle : " + rectangle.largeur);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Erreur inattendue");
    }
}
