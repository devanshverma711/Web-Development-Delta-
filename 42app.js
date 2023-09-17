console.log("before my if statement");
let age = 23;
let pop = "L";
if(pop==="XL"){
    console.log("price is Rs.250");
}
else if(pop==="L"){
    console.log("price is Rs.200");
}
else if(pop==="M"){
    console.log("price is Rs.100");
}
else{
    console.log(`price is Rs.50`);
}
console.log("after if statement");

let firstname = prompt("Enter your name :");
let lastname = prompt("Enter your last name");
console.log("Welcome",firstname, lastname)
console.error("this is error");
console.warn("this is warning");
