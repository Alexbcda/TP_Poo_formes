//class PentagoneR extends Forme {
  //  private _longeurCote: number;
    //private _largeurCote: number;

   //public aire() : number{
     //  return 0;//??;
   //}
//}

class Pentagone implements Forme {
    private _cote: number; // Attribut : longueur du côté du pentagone
    private _apotheme: number; // Attribut : longueur de l'apothème du pentagone

    constructor(cote: number, apotheme: number) {
        this._cote = cote;
        this._apotheme = apotheme;

        // Vérification pour s'assurer que les côtés forment un pentagone valide
        if (!this.estPentagoneValide()) {
            throw new Error("Les dimensions ne forment pas un pentagone valide.");
        }
    }

    private estPentagoneValide(): boolean {
        // Vérifiez si les dimensions sont positives
        if (this._cote <= 0 || this._apotheme <= 0) {
            return false;
        }

        // Autres conditions de validation pour un pentagone

        return true;
    }

    public aire(): number {
        // Utilisez la formule (5/2) * côté * apothème pour calculer l'aire
        return (5/2) * this._cote * this._apotheme;
    }

    public perimetre(): number {
        // Calculez le périmètre en multipliant la longueur du côté par 5
        return 5 * this._cote;
    }

    // Getter pour obtenir la valeur du côté
    get cote(): number {
        return this._cote;
    }

    // Setter pour définir la valeur du côté
    set cote(cote: number) {
        if (cote <= 0) {
            throw new Error("La longueur du côté doit être positive.");
        }
        this._cote = cote;
    }

    // Getter pour obtenir la valeur de l'apothème
    get apotheme(): number {
        return this._apotheme;
    }

    // Setter pour définir la valeur de l'apothème
    set apotheme(apotheme: number) {
        if (apotheme <= 0) {
            throw new Error("La longueur de l'apothème doit être positive.");
        }
        this._apotheme = apotheme;
    }
}

// Exemple d'utilisation de la classe Pentagone
try {
    const cote = 6; // Remplacez par la longueur du côté souhaitée
    const apotheme = 4; // Remplacez par la longueur de l'apothème souhaitée

    const pentagone = new Pentagone(cote, apotheme);
    const airePentagone = pentagone.aire();
    const perimetrePentagone = pentagone.perimetre();

    console.log("Longueur du côté du pentagone : " + pentagone.cote);
    console.log("Longueur de l'apothème du pentagone : " + pentagone.apotheme);
    console.log("Aire du pentagone : " + airePentagone);
    console.log("Périmètre du pentagone : " + perimetrePentagone);

    // Utilisation des getters et setters
    pentagone.cote = 7; // Définir une nouvelle valeur pour le côté
    pentagone.apotheme = 5; // Définir une nouvelle valeur pour l'apothème
    console.log("Nouvelle longueur du côté du pentagone : " + pentagone.cote);
    console.log("Nouvelle longueur de l'apothème du pentagone : " + pentagone.apotheme);
} catch (error) {
    if (error instanceof Error) {
        // Si une erreur de type 'Error' est générée, affichez le message d'erreur
        console.error("Pentagone - Erreur : " + error.message);
    } else {
        // Si une erreur de type différent est générée, affichez un message générique
        console.error("Pentagone - Erreur inattendue : " + error);
    }
}
