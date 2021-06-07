// Exercice 1

let myFocus = document.getElementsByTagName("input")[0];

myFocus.addEventListener("focus", () => {
    myFocus.style.backgroundColor = "blue";
})

// Exercice 2

let myFocusOut = document.getElementsByTagName("input")[1];

myFocusOut.addEventListener("focus", () => {
    myFocusOut.style.backgroundColor = "blue";
});
myFocusOut.addEventListener("focusout", () => {
    myFocusOut.style.backgroundColor = "white";
});

// Exercice 3

let para1 = document.getElementsByClassName("premierParagraphe");

let para2 = document.getElementsByClassName("secondParagraphe");

let para3 = document.getElementsByClassName("dernierParagraphe");

let myButton = document.getElementsByClassName("buttonExo btn btn-primary")[0];

myButton.addEventListener("click", () => {
    para1[0].textContent = para2[0].textContent;
    para3[0].textContent = para2[0].textContent;
})

// Exercice 4

let myInput = document.querySelectorAll("input")[2];

let myButton2 = document.getElementsByClassName("buttonExo btn btn-primary")[1];

let pNicolas = document.getElementById("exo4");

myButton2.addEventListener("click", () => {
    pNicolas.textContent = myInput.value;
});

// Exercice 5

let buttonValider = document.getElementsByClassName("btn btn-primary mb-2")[0];

let myChemin = (document.querySelectorAll("p")[4].textContent).substring(9);

let myImage = document.getElementsByClassName("img-responsive")[0];


buttonValider.addEventListener("click", () => {
    myImage.setAttribute("src", myChemin);
})

// Exercice 6

let myTartine = document.getElementsByClassName("img-responsive")[1];
let myTartine2 = document.getElementsByClassName("img-responsive")[2];

let myTartineSrc;

myTartine.addEventListener("click", () => {
    myTartineSrc = myTartine.src;

});

myTartine2.addEventListener("click", () => {
    myTartine2.src = myTartineSrc;
})

// Exercice 7

let buttonFlecher = document.getElementsByClassName("btn btn-primary mb-2")[1];

let p1 = document.querySelectorAll("p")[5];

let p2 = document.querySelectorAll("p")[6];

let temp;

buttonFlecher.addEventListener("click", () => {
    temp = p1.textContent;
    p1.textContent = p2.textContent;
    p2.textContent = temp;
})