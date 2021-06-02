// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc

let myH1 = document.querySelector("h1");

myH1.addEventListener("dblclick", () => {
    myH1.style.color = "white";
    myH1.style.backgroundColor = "red";
})

// ### 2. Au hover du h3, son texte rétrécit d'un caractère 

// let myH3 = document.querySelector("h3");

// myH3.addEventListener("mouseover", () => {
//     myH3.style.color = "red";
// })

let myH3 = document.querySelector("h3");


myH3.addEventListener("mouseover", () => {
    myH3.textContent = myH3.textContent.substr(0, myH3.textContent.length-1);
});

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let p = document.querySelector("p");
p.addEventListener("click", () => {
    if (p.style.backgroundColor == "blue" && p.style.Color == "gold") 
    {
        p.style.backgroundColor = "white";
        p.style.color = "black";
    }
    else 
    {
        p.style.backgroundColor = "blue";
        p.style.color = "gold";
    }
});