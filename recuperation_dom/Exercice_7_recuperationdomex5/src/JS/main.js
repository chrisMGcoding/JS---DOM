// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe

let className = document.getElementsByClassName("redPurple");
console.log(className);

// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence

let querySelector = document.querySelectorAll(".redPurple");
console.log(querySelector);

// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"

let h1Purple = document.querySelectorAll(".redPurple")[0];
console.log(h1Purple);

// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span

let liPspan = document.querySelectorAll("li, p, span");
console.log(liPspan);

// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 

let pImportant = document.querySelectorAll("li.important, p");
console.log(pImportant);

// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"

let h1Span = document.querySelectorAll("h1.redPurple, span.redPurple");
console.log(h1Span);
