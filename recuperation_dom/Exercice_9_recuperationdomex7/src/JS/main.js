// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id

let monH1 = document.querySelector('h1');
monH1.innerText = "Les attributs class et id";

// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A

let monH2 = document.querySelector('h2');
monH2.innerText = "Exercice 2 partie A";

// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B

let secondH2 = document.querySelectorAll('h2')[1];
secondH2.innerText = "Exercice 2 partie B";

// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 

let p = document.querySelector('p');
p.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";

// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide

let secondP = document.querySelectorAll('p')[1];
secondP.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";


// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"

let h1BigTitle = document.querySelector("h1");
h1BigTitle.setAttribute("id", "bigTitle");

// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"

let myDiv = document.querySelector('div');
myDiv.setAttribute("class", "container");

// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"

let h2Title = Array.from(document.querySelectorAll("h2"))
console.log(h2Title);

h2Title.forEach(element => {
    element.setAttribute("class","title")
});

// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

let pText = Array.from(document.querySelectorAll("p"));

pText.forEach(element => {
   element.setAttribute("class","text") 
});


// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding

let section1 = document.querySelector("section");
section1.setAttribute("class", "margin-bottom border-black padding");

// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding

let section2 = document.querySelectorAll("section")[1];
section2.setAttribute("class", "margin-top border-black padding");

// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px

let selection = document.querySelectorAll("section")[1].lastElementChild;
console.log(selection);

selection.innerHTML = "test";
selection.setAttribute("style", "background-color : blue; border : solid 2px black; height : 20px; width : 20px");
