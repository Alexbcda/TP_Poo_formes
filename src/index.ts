class Carre implements Forme {
  private _cote: number; // Attribut : longueur du côté du carré

  constructor(cote: number) {
      if (cote <= 0) {
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
