// création DIV

let myDiv = document.createElement("div");

// // création contenu de la DIV

let myH1 = document.createElement("h1");
let myH2 = document.createElement("h2");
let myInput = document.createElement("input");
let myButton = document.createElement("button");

// // ajout des éléments dans le HTML

let myBody = document.querySelector("body");

myBody.appendChild(myDiv);

myDiv.appendChild(myH1);
myDiv.appendChild(myH2);
myDiv.appendChild(myInput);
myDiv.appendChild(myButton);

// ajout texte dans les éléments

let titreH1 = document.createTextNode("Je suis un titre");
let titreH2 = document.createTextNode("Je suis un sous-titre");
let myButton1 = document.createTextNode("Acceptez");

myH1.appendChild(titreH1);
myH2.appendChild(titreH2);
myButton.appendChild(myButton1);

myH1.innerHTML = "Je suis un grand titre";

console.log(myH1);
console.log(myH1.parentNode);
console.log(myButton1.parentNode);

console.log(myDiv.children);
