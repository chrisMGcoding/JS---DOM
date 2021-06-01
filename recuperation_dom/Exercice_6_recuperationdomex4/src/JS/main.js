// ### 1. Affiche le h3 qui est le premier enfant de la div content

let allH3 = document.getElementsByTagName("h3");
console.log(allH3);

let firstH3 = allH3[0].innerHTML;
console.log(firstH3);

// ### 2. Affiche le titreNiv3

let titreNiv = allH3[1];
console.log(titreNiv.innerHTML);

// ### 3. Affiche l'élément qui précède le titreNiv3

let texteGeneral = titreNiv.previousElementSibling;
console.log(texteGeneral.innerHTML);

// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling

let petitP = document.getElementsByTagName("p")[1]; 

let grandP = petitP.nextElementSibling;
console.log(grandP);

// ### 5. Affiche le parent des éléments ayant comme class "important" 

let parent = document.getElementsByClassName("important")[0];

console.log(parent.parentNode);


// ### 6. Affiche le premier enfant, du parent de "listElements"

let enfant = document.getElementsByTagName("ul")[0].firstElementChild;
console.log(enfant);

// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"

let element = document.getElementsByTagName("li")[3].nextElementSibling;

console.log(element);

// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 

let textGeneral = document.getElementsByTagName("p")[3].nextElementSibling.nextElementSibling;
console.log(textGeneral);

// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)

let p = document.getElementsByTagName("span")[1].parentNode.nextElementSibling;
console.log(p);

// ### 10. En partant de Nicolas, affiche Primo

let nicolas = document.getElementsByTagName("b")[2];
console.log(nicolas.innerHTML);

let parentNicolas = nicolas.parentNode.parentNode;

let primo = parentNicolas.previousElementSibling.firstElementChild.firstElementChild;
console.log(primo.innerHTML);

// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

let mou = document.querySelector(".grandParagraphe");

// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle

let methode = Array.from(document.querySelectorAll("li"));

methode.forEach(element => {
    console.log(element);
})

