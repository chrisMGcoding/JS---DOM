// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

let myDiv = Array.from(document.querySelector("div").children);
let myDiv1 = document.querySelector("div");


myDiv.forEach(element => element.addEventListener("click", (e) => {
    console.log(e.target.textContent)
}));

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

myDiv.forEach(element => element.addEventListener("dblclick", (e) => {
    e.target.textContent = e.target.textContent.toUpperCase();
}));

// ### 3. Qui un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

let myButton = document.querySelector("input");
let index;
let propFinal;

let tabProp = ["border: 1px solid gold", "background-color: blue", "background-color: red", "border: 5px dotted gold"];

let random = (elem) => {
    index = Math.floor(Math.random()*tabProp.length);
    propFinal = tabProp[index];
    elem.setAttribute("style", propFinal)
}

myButton.addEventListener("click", () => {
    myDiv.forEach(element => {
        random(element)
    })
})

// let hasard;

// myButton.addEventListener("click", () => {
//     hasard = Math.floor(Math.random()*tabProp.length);
//     console.log(hasard)
//     if (hasard == 0) 
//     {
//         myDiv1.style.border = "1px solid gold";
//     }
//     else if (hasard == 1)
//     {
//         myDiv1.style.border = "5px dotted gold";
//     }
//     else if (hasard == 2)
//     {
//         myDiv1.style.backgroundColor = "blue";
//     }
//     else if (hasard == 3)
//     {
//         myDiv1.style.backgroundColor = "red";
//     }
// })