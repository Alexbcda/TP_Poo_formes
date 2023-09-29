/










/ Étape 1 : Identifier l'objectif de la classe
// Cette classe représente un carré avec un attribut pour la longueur du côté.

// Étape 2 : Choisissez un nom significatif pour la classe
class Carreee implements Forme {
    // Étape 3 : Définir les attributs
    // Attribut pour stocker la longueur du côté du carré
    private longueurCote: number;

    // Étape 5 : Définir le constructeur
    // Constructeur pour initialiser un objet carré avec une longueur de côté
    constructor(longueurCote: number) {
        // Étape 6 : Initialiser l'attribut dans le constructeur
        this.longueurCote = longueurCote;
    }

    // Étape 4 : Définir les méthodes
    // Méthode pour calculer l'aire du carré
    public calculerAire(): number {
        return this.longueurCote * this.longueurCote;
    }

    // Méthode pour calculer le périmètre du carré
    public calculerPerimetre(): number {
        return 4 * this.longueurCote;
    }

    // Étape 7 : Gérer l'encapsulation avec des getters et des setters (facultatif)
    // Getter pour obtenir la longueur du côté du carré
    public getLongueurCote(): number {
        return this.longueurCote;
    }

    // Setter pour définir la longueur du côté du carré
    public setLongueurCote(longueurCote: number): void {
        if (longueurCote <= 0) {
            console.error("La longueur du côté doit être positive.");
        } else {
            this.longueurCote = longueurCote;
        }
    }
}

// Étape 9 : Utiliser la classe
// Création d'une instance de la classe Carre
const carre1 = new Carre(5);

// Utilisation des méthodes pour calculer l'aire et le périmètre du carré
const aireCarre1 = carre1.calculerAire();
const perimetreCarre1 = carre1.calculerPerimetre();

console.log("Aire du carré : " + aireCarre1);
console.log("Périmètre du carré : " + perimetreCarre1);

// Utilisation des getters et setters pour accéder et modifier la longueur du côté
carre1.setLongueurCote(7);

console.log("Nouvelle longueur du côté du carré : " + carre1.getLongueurCote());
