//class Carre extends Forme {
  // private _longeurCote: number;

   //public aire() : number{
     //  return 0;//??;
   //}
//}

// II - Adapter les classe filles suivantes : Triangle, Carré, Cercle et Rectangle

/*implements dans une classe permet de garantir que cette classe 
//respecte un certain ensemble de règles ou de comportements spécifiés 
//par l'interface, ce qui renforce la cohérence et la structure du code, 
//ainsi que la conformité aux normes de programmation. */
class Carre implements Forme {
    
    /*Les attributs (ou membres de données) dans une classe servent à 
    représenter les caractéristiques ou les données associées à cette classe. 
    Ils sont utilisés pour stocker des informations spécifiques à une instance de la classe 
    et définissent l'état de l'objet créé à partir de cette classe. 
    Les attributs sont essentiels pour encapsuler les données et le comportement d'un objet dans un package cohérent.*/
    private _cote: number; // Attribut : longueur du côté du carré

    constructor(cote: number) {
        if (cote <= 0) {
            /*La déclaration throw dans le code que vous avez montré est utilisée pour générer une exception (ou une erreur) lorsqu'une condition particulière n'est pas satisfaite.*/
            throw new Error("La longueur du côté doit être positive.");
        }
        this._cote = cote;
    }

    public aire(): number {
        return this._cote * this._cote; // L'aire d'un carré est le côté au carré
    }

    public perimetre(): number {
        return 4 * this._cote; // Le périmètre d'un carré est 4 fois la longueur du côté
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
}

// Exemple d'utilisation de la classe Carre
try {
    const coteCarre = 5; // Remplacez par la longueur du côté souhaitée
    const carre = new Carre(coteCarre);
    const aireCarre = carre.aire();
    const perimetreCarre = carre.perimetre();
    console.log("Aire du carré : " + aireCarre);
    console.log("Périmètre du carré : " + perimetreCarre);

    // Utilisation des getters et setters
    console.log("Côté du carré : " + carre.cote);
    carre.cote = 7; // Définir une nouvelle valeur pour le côté
    console.log("Nouveau côté du carré : " + carre.cote);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("Erreur inattendue");
    }
}
