TP Encapsulation, héritage et polymorphisme
Partie 1 Mise en place
I - Transformer la classe abstraite Forme en interface

II - Adapter les classe filles suivantes : Triangle, Carré, Cercle et Rectangle

III Ajouter les attributs dans les classes filles

IV - Mettre les getteurs et les setteurs dans les classes filles suivantes ci-dessus

V - Enfin, remplissez les différentes méthodes aire et périmètre dans chacune de ses classes
'''



Partie 2 : Mise en pratique
Faire 3 objets de type Forme/IForme pour ensuite les construire à l'aide d'un constructeur de Carre, de Rectangle et de Cercle.
Sur les 3 objets, appeler et logger les méthodes aire() et perimetre()

Expliquer ce qu'ils se passe dynamiquement, à l’exécution du programme

Partie 3 : Généralisation
Refaire les mêmes étapes de la partie 1 puis 2 pour les classe Losange, Parallelogramme, PentagoneR (régulier) et Quadrilatère.

Partie 4 : Manipulation des objets et des classes
Faite une variable static "nbrNomClasse" qui compte pour chaque classe le nombre d'instance de chaque classe. Ajouter l'incrémentation de cette variable dans le constructeur.

Pour chaque classe, faite une méthode statique qui calcul la somme des aires et des périmètres des formes passées en argument 



this._cote est une variable de classe (ou un attribut de classe) qui est utilisée pour stocker la valeur de la longueur du côté du carré. Dans ce cas, this._cote est initialisée avec la valeur du paramètre cote passé au constructeur de la classe Carre.

Voici comment cela fonctionne :

Lorsque vous créez une instance de la classe Carre en appelant son constructeur, vous devez fournir une valeur pour la longueur du côté en tant qu'argument. Par exemple :

```typescript
const carre = new Carre(5);
Dans cet exemple, 5 est passé comme argument au constructeur.

À l'intérieur du constructeur de la classe Carre, cette valeur (5 dans l'exemple ci-dessus) est reçue en tant que paramètre cote :

typescript
Copy code
constructor(cote: number) {
    // ...
}
Ensuite, cette valeur est affectée à l'attribut de classe this._cote :

typescript
Copy code
this._cote = cote;
Cela signifie que la valeur de 5 est stockée dans l'attribut this._cote, ce qui permet à l'instance de la classe Carre d'avoir une connaissance interne de sa propre longueur de côté.

En résumé, this._cote est utilisée pour stocker et maintenir la longueur du côté du carré au sein de chaque instance de la classe Carre. Elle permet d'accéder à cette valeur depuis d'autres méthodes de la classe, par exemple, pour calculer l'aire et le périmètre du carré.
'''

Copy c