// ## Exo 01 
// > Créez un bouton en JS avec une valeur "Je suis un bouton"
// > Au clique la valeur du bouton devient "j'ai été cliqué"

let body = document.querySelector("body");
let btn = document.createElement("button");

body.appendChild(btn);

btn.addEventListener("click", () => {
    btn.textContent = "j'ai été cliqué";
});

// ## Exo 02
// > Créer un 2eme button
// > Au clique la valeur du button devient "j'ai été cliqué x fois" le x est le nombre de clique effectué.

let btnAgain = document.createElement("button");

body.appendChild(btnAgain);

let y = 0;

btnAgain.addEventListener("click", () => {
    y += 1;
    btnAgain.textContent = `on a cliqué ${y} fois dessus`;
})