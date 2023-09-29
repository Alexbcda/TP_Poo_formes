//class Cercle extends Forme {
 //  private _rayon : number;

   // public aire() : number{
    //    return 0;  //Math.PI* ??;
   //}
//}



class Cercle implements Forme {
   private _rayon: number; // Attribut : rayon du cercle

   constructor(rayon: number) {
       if (rayon <= 0) {
           throw new Error("Le rayon doit être positif.");
       }
       this._rayon = rayon;
   }

   public aire(): number {
       const pi: number = Math.PI;
       return pi * this._rayon * this._rayon; // Aire du cercle = π * rayon²
   }

   public perimetre(): number {
       const pi: number = Math.PI;
       return 2 * pi * this._rayon; // Périmètre du cercle = 2 * π * rayon
   }

   // Getter pour obtenir la valeur du rayon
   get rayon(): number {
       return this._rayon;
   }

   // Setter pour définir la valeur du rayon
   set rayon(rayon: number) {
       if (rayon <= 0) {
           throw new Error("Le rayon doit être positif.");
       }
       this._rayon = rayon;
   }
}

// Exemple d'utilisation de la classe Cercle
try {
   const rayonCercle = 6; // Remplacez par le rayon souhaité
   const cercle = new Cercle(rayonCercle);
   const aireCercle = cercle.aire();
   const perimetreCercle = cercle.perimetre();
   console.log("Aire du cercle : " + aireCercle);
   console.log("Périmètre du cercle : " + perimetreCercle);

   // Utilisation des getters et setters
   console.log("Rayon du cercle : " + cercle.rayon);
   cercle.rayon = 8; // Définir une nouvelle valeur pour le rayon
   console.log("Nouveau rayon du cercle : " + cercle.rayon);
} catch (error) {
   if (error instanceof Error) {
       console.error(error.message);
   } else {
       console.error("Erreur inattendue");
   }
}
