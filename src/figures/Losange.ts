//class Losange extends Forme {
  //  private _petiteDiag: number;
   // private _grandeDiag: number;

   //public aire() : number{
     //  return 0;//??;
   //}
//}

class Losange implements Forme {
    private _diagonale1: number; // Attribut : longueur de la première diagonale du losange
    private _diagonale2: number; // Attribut : longueur de la deuxième diagonale du losange

    constructor(diagonale1: number, diagonale2: number) {
        this._diagonale1 = diagonale1;
        this._diagonale2 = diagonale2;

        // Vérification pour s'assurer que les diagonales forment un losange valide
        if (!this.estLosangeValide()) {
            throw new Error("Les longueurs des diagonales ne forment pas un losange valide.");
        }
    }

    private estLosangeValide(): boolean {
        // Vérifiez si les longueurs des diagonales sont positives
        if (this._diagonale1 <= 0 || this._diagonale2 <= 0) {
            return false;
        }

        // Autres conditions de validation pour un losange
        // (par exemple, les diagonales se coupent à angle droit)

        return true;
    }

    public aire(): number {
        // Utilisez la formule (diagonale1 * diagonale2) / 2 pour calculer l'aire
        return (this._diagonale1 * this._diagonale2) / 2;
    }

    public perimetre(): number {
        // Dans un losange, tous les côtés ont la même longueur (égal à la moitié de la somme des diagonales)
        return 2 * (this._diagonale1 + this._diagonale2);
    }

    // Getter pour obtenir la valeur de la première diagonale
    get diagonale1(): number {
        return this._diagonale1;
    }

    // Setter pour définir la valeur de la première diagonale
    set diagonale1(diagonale1: number) {
        if (diagonale1 <= 0) {
            throw new Error("La première diagonale doit être positive.");
        }
        this._diagonale1 = diagonale1;
    }

    // Getter pour obtenir la valeur de la deuxième diagonale
    get diagonale2(): number {
        return this._diagonale2;
    }

    // Setter pour définir la valeur de la deuxième diagonale
    set diagonale2(diagonale2: number) {
        if (diagonale2 <= 0) {
            throw new Error("La deuxième diagonale doit être positive.");
        }
        this._diagonale2 = diagonale2;
    }
}

// Exemple d'utilisation de la classe Losange
try {
    const diagonale1 = 8; // Remplacez par la longueur de la première diagonale souhaitée
    const diagonale2 = 6; // Remplacez par la longueur de la deuxième diagonale souhaitée

    const losange = new Losange(diagonale1, diagonale2);
    const aireLosange = losange.aire();
    const perimetreLosange = losange.perimetre();

    console.log("Longueur de la première diagonale du losange : " + losange.diagonale1);
    console.log("Longueur de la deuxième diagonale du losange : " + losange.diagonale2);
    console.log("Aire du losange : " + aireLosange);
    console.log("Périmètre du losange : " + perimetreLosange);

    // Utilisation des getters et setters
    losange.diagonale1 = 9; // Définir une nouvelle valeur pour la première diagonale
    losange.diagonale2 = 7; // Définir une nouvelle valeur pour la deuxième diagonale
    console.log("Nouvelle longueur de la première diagonale du losange : " + losange.diagonale1);
    console.log("Nouvelle longueur de la deuxième diagonale du losange : " + losange.diagonale2);
} catch (error) {
    if (error instanceof Error) {
        // Si une erreur de type 'Error' est générée, affichez le message d'erreur
        console.error("Losange - Erreur : " + error.message);
    } else {
        // Si une erreur de type différent est générée, affichez un message générique
        console.error("Losange - Erreur inattendue : " + error);
    }
}
