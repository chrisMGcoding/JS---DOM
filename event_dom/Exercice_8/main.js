// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.

let myDiv = document.querySelector("div");

let myDivH1 = myDiv.querySelector("h1");

let myDivH2 = myDiv.querySelector("h2");

let myDivP = myDiv.querySelector("p");

document.body.addEventListener("click", (e) => {
    if (e.target == myDiv) {
        myDiv.style.border = "solid 1px black"
    }
    else if (e.target == myDivH1) {
        e.target.setAttribute("style", "width: max-content; background-color : yellow"); 
    }
    else if (e.target == myDivH2) {
        e.target.textContent = e.target.textContent.substring(0, e.target.textContent.length-1)
    }
    else if (e.target == myDivP) {
        e.target.style = "font-weight : bold; color : red"
    }
})

// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 


let texteAjouter = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

let mySection = document.querySelector("section");
mySection.style = "height: 10px";

let myP = mySection.firstElementChild;

mySection.addEventListener("mouseover", () => {
    myP.textContent = texteAjouter;
})

mySection.addEventListener("mouseout", () => {
    myP.textContent = "";
})
