// ## Exo 03
// > Créer un button a qui vous assignerez l'écouteur d'évenement click qui rajoutera un titre dans votre page web

let myBody = document.querySelector("body");
let myButton = document.createElement("button");

myBody.appendChild(myButton);

let title;

myButton.addEventListener("click", () => {
    title = document.createElement("h1");
    myBody.appendChild(title);
    title.textContent = "Je suis un titre apparu grâce au bouton"
});

// ​
// ## Exo 04
// > Créer un buttton, assigner l'écouteur d'évenement click. Ce bouton rajoutera un button dans votre page web avec comme valeur Exo 04

let myButton1 = document.createElement("button");
let myButton2;

myBody.appendChild(myButton1);

myButton1.addEventListener("click", () => {
    myButton2 = document.createElement("button");
    myBody.appendChild(myButton2);
    myButton2.textContent = "Exo 4"
});

// ## Exo 05
// > Créez un paragraphe avec du texte
// > Créez un button "modifier la couleur du paragraphe"
// > Au clique ça changera la couleur du paragraphe

let paragraphe = document.createElement("p");
paragraphe.textContent = "tiens ton paragraphe ! texte powered by CDG"

myBody.appendChild(paragraphe);

paragraphe.addEventListener("click", () => {
    paragraphe.style.color = "red";
})

// ## Exo 6
// > Etape 1 :
// > Créer un button qui crée un h2 avec une valeur "Je lance une function"
// > Rajouter le titre sur la page web
// > Etape 2 :
// > Cette function doit également rajouter un boutton avec comme valeur "Modifier le titre Exo 06"
// > Etape 3 :
// > le bouton "Modifier le titre" lance une function qui modifie le texte en lui mettant sa couleur en rouge.

let myButton3 = document.createElement("button");
myButton3.textContent = "création h2 + fonction";
myBody.appendChild(myButton3);

let h2;
let myButton4;


myButton3.addEventListener("click", () => {
    h2 = document.createElement("h2");
    myBody.appendChild(h2);
    h2.textContent = "Titre de la page web !";
    myButton4 = document.createElement("button");
    myBody.appendChild(myButton4);
    myButton4.textContent = "modifier le titre Exo 6";
    myButton4.addEventListener("click", () => {
        myButton4.style.color = "red";
        h2.style.color = "red";
    })
})

