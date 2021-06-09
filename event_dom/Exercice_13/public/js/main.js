// Exercice 1 ------------------------------->

// Partie 1

let pQueryAll = document.querySelectorAll("p")[1];

let pId = document.getElementById("pID");

let pClass = document.getElementsByClassName("pClass");

let pQuery = document.querySelector("p").nextElementSibling;

// Partie 2

let firstLi = document.querySelectorAll("li")[6].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

let texteH2 = firstLi.parentNode.previousElementSibling;

let firstDiv = texteH2.parentNode;

let strong = firstLi.nextElementSibling.parentNode.parentNode.previousElementSibling.children[2].textContent;

// Exercice 2 ------------------------------->

// Partie 1

let h4Text = document.querySelector("h4");
h4Text.textContent = "l'animal préféré de Fanny c'est le crabe"

// Partie 2

let tabAliment = ["pomme", "kiwi", "banane", "fraise", "poire", "mandarine", "melon"];
let allLi = Array.from(document.querySelector("ul").children);

for (let i = 0; i < allLi.length; i++) {
    allLi[i].textContent = tabAliment[i];
}

// Exercice 3 ------------------------------->

// Partie 1

let point3 = document.getElementById("point3");

let h2Div = document.createElement("h2");
h2Div.textContent = "3. Créer, attacher et effacer un élément";

point3.appendChild(h2Div);

// Partie 2

let film = ["How High", "Peaky blinders", "Bad Boys", "Hot Rod"];

film.forEach(element => {
    let monH3 = document.createElement("h3");
    monH3.textContent = element;
    point3.appendChild(monH3);
});

let tabH3 = Array.from(document.getElementsByTagName("h3"));

tabH3.forEach(element => {
    if (element.textContent == "Hot Rod") {
        element.remove()
    }
})

// Partie 3

let tabTitre = ["récupération d'évènement", "modifier un élément", "créer et effacer un élément", "get et setAttribute, eventListeners", "event et event.target"];

tabTitre.forEach(element => {
    let titre = document.body.insertBefore(document.createElement("h3"), point3);
    titre.textContent = element;
})
// Exercice 4 ------------------------------->

// Partie 1

let image = document.querySelector("img");
image.setAttribute("style", "width : 550px; height : 150px");
image.setAttribute("class", "surprise");

// Partie 2

let point4Strong = document.querySelectorAll("strong")[1];
point4Strong.setAttribute("id", "colorRed");

// Partie 3

let nimporte = document.querySelectorAll("p")[1];
console.log(nimporte.getAttribute("class"));


// Exercice 5 ------------------------------->

// Partie 1

let point5 = document.querySelectorAll("div")[3].nextElementSibling.nextElementSibling;
console.log(point5)

let firstButton = point5.children[1];

firstButton.addEventListener("click", () => {
    console.log(document.querySelector("h1"));
});

// Partie 2

let secondButton = point5.children[2];

let pButton = point5.children[3];
pButton.removeAttribute("class");
console.log(pButton);

secondButton.addEventListener("click", () => {
    pButton.classList.toggle("d-white");
    console.log(pButton)
})



// Exercice 6 ------------------------------->

let changeClick = Array.from(document.getElementById("point6").children[1].children);

changeClick.forEach(elem => {
    elem.addEventListener("click", (e) => {
        if (e.target.innerText == "click 1") {
            e.target.style.border = "red solid 1px";
        }
        else if (e.target.innerText == "click 2") {
            e.target.style.backgroundColor = "yellow";
        }
        else if (e.target.innerText == "click 3") {
            e.target.style.color = "green";
        }
        else if (e.target.innerText == "click 4") {
            e.target.style.textDecoration = "underline";
        }
    })
})

let divNum = document.getElementById("numeros");
let bouton = ["btn", "btn2", "btn3", "btn4", "btn5"];
let monB;

bouton.forEach(element => {
    monB = document.createElement("button");
    divNum.appendChild(monB);
    monB.innerText = element;
    monB.addEventListener("click", (e) => {
        alert(e.target.innerText);
    })
});
