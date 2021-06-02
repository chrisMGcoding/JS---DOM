// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-error

let myH1 = document.querySelector("h1");

myH1.addEventListener("click", () => {
    myH1.classList.add("text-error");
});

// ### 2. Au double clique du h3, la class text-error

let myH3 = document.querySelector("h3");

myH3.addEventListener("dblclick", () => {
    myH3.classList.add("text-error");
})

// ### 3. Ajoute la class text-style, quand on clique sur le paragraphe, trouve une methode qui retire la class si elle est déjà sur le paragraphe

let firstP = document.querySelector("p");

firstP.addEventListener("click", () => {
    firstP.classList.toggle("text-style")
});

// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 

let secondP = document.getElementsByTagName("p")[1];

let allSpanSecond = secondP.querySelectorAll("span");

allSpanSecond.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("bolder");
    })
})

// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

let dernierP = document.getElementsByTagName("p")[2];

let allSPanDernier = dernierP.querySelectorAll("span");

allSPanDernier = Array.from(allSPanDernier);

allSPanDernier[0].addEventListener("click", () => {
    allSPanDernier[0].classList.add("bolder-red");
    allSPanDernier[1].classList.remove("bolder-red");
    allSPanDernier[2].classList.remove("bolder-red");
});

allSPanDernier[1].addEventListener("click", () => {
    allSPanDernier[1].classList.add("bolder-red");
    allSPanDernier[0].classList.remove("bolder-red");
    allSPanDernier[2].classList.remove("bolder-red");
});

allSPanDernier[2].addEventListener("click", () => {
    allSPanDernier[2].classList.add("bolder-red");
    allSPanDernier[1].classList.remove("bolder-red");
    allSPanDernier[0].classList.remove("bolder-red");
});
