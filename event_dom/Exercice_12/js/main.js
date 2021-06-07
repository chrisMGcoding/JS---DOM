// DropDown Menu

let myButton = document.querySelectorAll("div")[1];
let menuDeroulant = document.querySelectorAll("div")[2];

console.log(menuDeroulant);
console.log(myButton);

myButton.addEventListener("click", () => {
    menuDeroulant.style.display = "flex"
});

// Slider

let arrowLeft = document.querySelectorAll("div")[4];
let image = document.querySelectorAll("div")[5].firstElementChild;
let arrowRight = document.querySelectorAll("div")[6];

let tabPhoto = ["./img/photo1.jpg", "./img/photo2.jpg", "./img/photo3.jpg"];

let i;
let x = 0;

arrowRight.addEventListener("click", () => {
    x += 1;
    // for (i = 0; i < tabPhoto.length; i++) {
    //     image.src = tabPhoto[i];
    // }
})


