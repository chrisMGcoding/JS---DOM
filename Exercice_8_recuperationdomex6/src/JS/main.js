// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text

let h2 = document.querySelector('h2.ml-5');
console.log(h2.textContent);

let h2All = document.querySelectorAll('h2.ml-5');
console.log(h2All);

// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"

// h2.innerHTML = "Exercice 1";
// console.log(h2.innerHTML);
h2.textContent = "Exercice 1";
console.log(h2.textContent);

// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.

let p = h2.nextElementSibling;
p.textContent = "Exercice 1";
console.log(p);

// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console

let firstSection = document.querySelector("section");
console.log(firstSection);
console.log(firstSection.id);

// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)

let h1First = document.querySelector("h1");
console.log(h1First);
console.log(h1First.className);
console.log(h1First.classList);

// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1

let h1 = Array.from(document.querySelectorAll("h1"));
console.log(h1);

h1.forEach(element => {
    console.log(element.className);
});

// ### 7. Trouve une propriété pour afficher tous les attributs du premier input

let input = document.querySelector("input");
console.log(input.attributes);

// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input

console.log(input.getAttribute('type'))

// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"

let myInput = document.querySelector("#inputPassword3");
myInput.setAttribute('type', 'password');
console.log(myInput);

// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"

myInput.setAttribute('type', 'color');
console.log(myInput);