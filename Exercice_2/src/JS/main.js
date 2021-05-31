let myH1 = document.createElement("h1");

let myBody = document.querySelector("body");

myBody.appendChild(myH1);

let myName = document.createTextNode("Run Forest");
console.log(myName);

myH1.appendChild(myName);

console.log(myBody);