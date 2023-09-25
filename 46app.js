 let student ={
     name:"Devansh",
     age:22,
     marks:94.4,
    city:"delhi"
    }

// let student2 = ["Devansh",23,94.4];

// const item = {
//     price:100.99,
//     discount:50,
//     color:["red","pink"]
// }

const post={
    username:"devanshverma",
    content:"This is my #firstPost",
    like:50,
    tag:["devanshverma52","devnash711"]
}


const max=prompt("enter the max number");
let random = Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congragulation random number was",random);
        break;
    }
    if(guess>random){
        guess = prompt("try smaller number");
    }
    if(guess<random){
        guess = prompt("try larger number");
    }
    // else{
    //     guess = prompt("your guess was wrong.please try again");
    // }
}