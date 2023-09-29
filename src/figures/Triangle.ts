//class Triangle extends Forme {
//   private _longeurCote: number;

 //  public aire() : number{
   //    return 0;//??;
   //}
//}

// II - Adapter les classe filles suivantes : Triangle, Carré, Cercle et Rectangle
class Triangle implements Forme {
    private base: number; // Attribut : longueur de la base du triangle
    private hauteur: number; // Attribut : hauteur du triangle
    private coteA: number; // Attribut : longueur du côté A du triangle
    private coteB: number; // Attribut : longueur du côté B du triangle
    private coteC: number; // Attribut : longueur du côté C du triangle

    constructor(base: number, hauteur: number, coteA: number, coteB: number, coteC: number) {
        this.base = base;
        this.hauteur = hauteur;
        this.coteA = coteA;
        this.coteB = coteB;
        this.coteC = coteC;

        // Vérification pour s'assurer que les côtés forment un triangle valide
        if (!this.estTriangleValide()) {
            throw new Error("Les longueurs des côtés ne forment pas un triangle valide.");
        }
    }

    private estTriangleValide(): boolean {
        // Vérifiez si les longueurs des côtés satisfont l'inégalité triangulaire
        // (La somme de deux côtés est toujours supérieure au troisième côté)
        return (
            this.coteA + this.coteB > this.coteC &&
            this.coteA + this.coteC > this.coteB &&
            this.coteB + this.coteC > this.coteA
        );
    }

    public aire(): number {
        // Utilisez la formule (base * hauteur) / 2 pour calculer l'aire
        return (this.base * this.hauteur) / 2;
    }

    public perimetre(): number {
        // Calculez le périmètre en additionnant les longueurs des côtés du triangle
        return this.coteA + this.coteB + this.coteC;
    }

    // Nouvelle méthode pour calculer le périmètre
    public calculerPerimetre(): number {
        return this.coteA + this.coteB + this.coteC;
    }
}

// Exemple d'utilisation de la classe Triangle
try {
    const base1 = 5; // Remplacez par la base souhaitée
    const hauteur1 = 4; // Remplacez par la hauteur souhaitée
    const coteA1 = 3; // Remplacez par la longueur du côté A
    const coteB1 = 4; // Remplacez par la longueur du côté B
    const coteC1 = 5; // Remplacez par la longueur du côté C

    const triangle1 = new Triangle(base1, hauteur1, coteA1, coteB1, coteC1);
    const aire1 = triangle1.aire();
    const perimetre1 = triangle1.calculerPerimetre(); // Utilisation de la nouvelle méthode
    console.log("Triangle 1 - Aire : " + aire1);
    console.log("Triangle 1 - Périmètre : " + perimetre1);
} catch (error) {
    if (error instanceof Error) {
        // Si une erreur de type 'Error' est générée, affichez le message d'erreur
        console.error("Triangle 1 - Erreur : " + error.message);
    } else {
        // Si une erreur de type différent est générée, affichez un message générique
        console.error("Triangle 1 - Erreur inattendue : " + error);
    }
}
