// ### 1. Affiche le contenu textuel du second h1
let a = document.getElementsByTagName("h1")[1];
console.log(a);

let contenu = a.innerHTML;
console.log(contenu);

// ### 2. Affiche le contenu textuel du dernier li
let b = document.getElementsByTagName("div")[0];
console.log(b);

let c = b.lastElementChild.previousElementSibling;
console.log(c);

let d = c.lastElementChild;
console.log(d);

let e = d.innerHTML;
console.log(e);

let lastLi = document.getElementsByTagName("li")[3].textContent;
console.log(lastLi);

// ### 3. Affiche le contenu textuel du premier p en majuscule

let f = b.firstElementChild.nextElementSibling.innerHTML.toUpperCase();

console.log(f);

// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule

let g = c.getElementsByTagName("li");
console.log(g);

g = Array.from(g);
console.log(g);

g.forEach(element => {
    element.textContent = element.innerHTML.toUpperCase();
    console.log(element.textContent);
});