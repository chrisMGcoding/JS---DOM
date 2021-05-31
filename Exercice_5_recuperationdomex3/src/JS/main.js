// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class

let premierPara = document.getElementsByClassName("tartine")[0].innerHTML;
console.log(premierPara);

// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"

let deuxiemePara = document.getElementById("toast").innerHTML;
console.log(deuxiemePara);

// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)

let dernierPara = document.getElementsByClassName("tartine")[1];
console.log(dernierPara);

// afficher tous les <p> en majuscule

let pMajuscule = document.getElementsByTagName("p");
console.log(pMajuscule);

pMajuscule = Array.from(pMajuscule);
console.log(pMajuscule);

pMajuscule.forEach(element => {
    element.innerHTML = element.innerHTML.toUpperCase();
    console.log(element.innerHTML);
});
