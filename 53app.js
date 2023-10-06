let para  = document.createElement("p");
para.innerText="hey i am para red in colour";
document.querySelector("body").append(para);

para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText="Hey i am h3 blue in color";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let box = document.createElement("div");
let h1 = document.createElement("h1");
let para1 = document.createElement("p");

h1.innerText="I am in div";
para1.innerText="ME TOO";

box.append(h1);
box.append(para1);
box.classList.add("prop");

document.querySelector("body").append(box);




