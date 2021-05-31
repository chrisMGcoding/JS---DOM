// pour cibler un élément grâce à son ID
let myH1Id = document.getElementById("monId");
console.log(monId);

console.log(myH1Id.innerHTML);

myH1Id.innerHTML ="J'ai changé le texte avec inner HTML";
console.log(myH1Id.innerHTML);

// pour cibler un élément grâce à sa classe
// stocke les éléments dans un tableau (HTML Collection)
let myH1Class = document.getElementsByClassName("maClasse");
console.log(myH1Class);
console.log(myH1Class[0]);

// pour cibler un élément grâce à sa balise
let myH3Balise = document.getElementsByTagName("h3");
console.log(myH3Balise);

// pour cibler un élément grâce à son querySelector
// peut cibler n'importe quel type d'éléments (class/id/balise) mais ne selectionne que le 1e
let myH4QuerySelector = document.querySelector("h3");
console.log(myH4QuerySelector);

// pour cibler un élément avec querySelectorAll
let myH4QuerySelectorAll = document.querySelectorAll("h4");
console.log(myH4QuerySelectorAll);
console.log(myH4QuerySelectorAll[0]);

// enlever un élément 
myH4QuerySelectorAll[0].remove();

//créer un élément via DOM
let creerElem = document.createElement("h5");
console.log(creerElem);

//créer un élément texte via DOM
let creerTexte = document.createTextNode("injecter avec appendChild");
console.log(creerTexte);

let myBody = document.querySelector("body");
console.log(myBody);

myBody.appendChild(creerElem); // je rajoute le h5 dans le body
creerElem.appendChild(creerTexte); // je rajoute le texte dans le h5

//Je peux récupérer un attribut avec getAttribute(), le paramètre contient l'attribut que l'on veut récupérer
let monH1AvecUneClasse = document.querySelectorAll('h1')[1];
console.log(monH1AvecUneClasse);
let attribut = monH1AvecUneClasse.getAttribute('id');
console.log(attribut)

//Pour modifier un attribut existant, j'utilise setAttribute(), le premier paramètre est l'attribut que je veux changer et le deuxième est la nouvelle valeur 
let monH1ChangerId = document.querySelectorAll('h1')[3];
monH1ChangerId.setAttribute('id', 'monIdChange');
console.log(monH1ChangerId);

monH1AvecUneClasse.setAttribute('class', "maNouvelleClass");
console.log(monH1AvecUneClasse);

let h1Rouge = document.getElementById('titreRouge');
h1Rouge.style.color = 'red';
h1Rouge.style.backgroundColor = "blue";

