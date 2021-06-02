// >*En utilisant l'attribut style*

// ### 1. Récupère le h1 dans une variable 
// ### 2. Créer un programme qui met le texte du h1 en bleu
// ### 3. Met ce programme dans une function
// ### 4. Appelle cette function pour qu'elle soit executé 
// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function

let monH1 = document.querySelector("h1");
console.log(monH1)



let changeColor = () => {
    monH1.style.color = "blue";
}

monH1.addEventListener("click", changeColor);