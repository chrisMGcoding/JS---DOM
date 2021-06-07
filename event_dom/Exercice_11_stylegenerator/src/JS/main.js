// création de la DIV sur laquelle les effets seront appliqués -----------------

let divTest = document.querySelector("div");

// création des boutons pour la couleur -----------------

let buttonGreen = document.querySelectorAll("button")[0];
let buttonBlue = document.querySelectorAll("button")[1];
let buttonRed = document.querySelectorAll("button")[2];
let buttonYellow = document.querySelectorAll("button")[3];

// mise en place de l'effet des boutons couleur -----------------

buttonGreen.addEventListener("click", () => {
    divTest.style.backgroundColor = "green";
});

buttonBlue.addEventListener("click", () => {
    divTest.style.backgroundColor = "blue";
});

buttonRed.addEventListener("click", () => {
    divTest.style.backgroundColor = "red";
});

buttonYellow.addEventListener("click", () => {
    divTest.style.backgroundColor = "yellow";
});

// création des boutons pour les bordures -----------------

let buttonBorderThick = document.querySelectorAll("button")[4];
let buttonBorderDotted = document.querySelectorAll("button")[5];
let buttonBorderLight = document.querySelectorAll("button")[6];

// mise en place de l'effet des boutons bordure -----------------

buttonBorderThick.addEventListener("click", () => {
    divTest.style.border = "25px solid black";
});

buttonBorderDotted.addEventListener("click", () => {
    divTest.style.border = "10px dotted black";
});

buttonBorderLight.addEventListener("click", () => {
    divTest.style.border = "3px solid black";
});

// création des boutons pour les bordures top -----------------

let buttonBorderTop1 = document.querySelectorAll("button")[7];
let buttonBorderTop2 = document.querySelectorAll("button")[8];
let buttonBorderTop3 = document.querySelectorAll("button")[9];

// mise en place de l'effet des boutons bordure top -----------------

buttonBorderTop1.addEventListener("click", () => {
    divTest.style.borderTop = "10px solid red";
});

buttonBorderTop2.addEventListener("click", () => {
    divTest.style.borderTop = "15px solid red";
});

buttonBorderTop3.addEventListener("click", () => {
    divTest.style.borderTop = "20px solid red";
});

// mise en place Color Picker

// import Pickr from './node_modules/pickr-widget/dist/pickr.min'; 

const myPickr = new Pickr({

    el: '.example',
    components: {

      // color preview
      preview: true,

      // enables opacity slider
      opacity: true,

      // enables HUE slider
      hue: true,     // Hue slider

      // shows/hides controls
      output: {
        hex: true,
        rgba: true,
        hsla: true,
        hsva: true,
        cmyk: true, 
        input: true
      }
    }

});

function onChange(color)
{
    let rgba = color.toRGBA();
    let rgba_final = 'rgb(' + rgba.join(',') + ')';
    
    divTest.style.backgroundColor = rgba_final;
}

myPickr.on('change', onChange);

// mise en place des sizer pour les bordures

let input1 = document.getElementById("full");

input1.addEventListener("click", () => {
    let input1Value = input1.value + "px";
    divTest.style.borderWidth = input1Value;
});

let input2 = document.getElementById("right");

input2.addEventListener("click", () => {
    let input2Value = input2.value + "px";
    divTest.style.borderRightWidth = input2Value;
});

let input3 = document.getElementById("left");

input3.addEventListener("click", () => {
    let input3Value = input3.value + "px";
    divTest.style.borderLeftWidth = input3Value;
});

let input4 = document.getElementById("top");

input4.addEventListener("click", () => {
    let input4Value = input4.value + "px";
    divTest.style.borderTopWidth = input4Value;
});

let input5 = document.getElementById("bottom");

input5.addEventListener("click", () => {
    let input5Value = input5.value + "px";
    divTest.style.borderBottomWidth = input5Value;
});

// mise en place des sizer pour border radius

let input6 = document.getElementById("fullRadius");

input6.addEventListener("click", () => {
    let input6Value = input6.value + "px";
    divTest.style.borderRadius = input6Value;
});

let input7 = document.getElementById("rightRadius");

input7.addEventListener("click", () => {
    let input7Value = input7.value + "px";
    divTest.style.borderTopRightRadius = input7Value;
});

let input8 = document.getElementById("leftRadius");

input8.addEventListener("click", () => {
    let input8Value = input8.value + "px";
    divTest.style.borderTopLeftRadius = input8Value;
});

let input9 = document.getElementById("topRadius");

input9.addEventListener("click", () => {
    let input9Value = input9.value + "px";
    divTest.style.borderBottomLeftRadius = input9Value;
});

let input10 = document.getElementById("bottomRadius");

input10.addEventListener("click", () => {
    let input10Value = input10.value + "px";
    divTest.style.borderBottomRightRadius = input10Value;
});