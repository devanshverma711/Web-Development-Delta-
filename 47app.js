function hello(){
    console.log("Hello");
}

function isAdult(){
    let age =18;
    if(age>=18){
        console.log("Adult");
    }
}

function printPoem(){
    console.log("Twinkle Twinkle")
}
printPoem();

function roll(){
    console.log(Math.floor(Math.random()*6)+1);
}

roll();

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Devansh",22);
printInfo("Karan")

function table(number){
    for(i =1;i<=10;i++){
        console.log(i*number);
    }
}
table(3);

function sumof(number){
    let sum=0;
    for(i=1;i<=number;i++){
        sum +=i;
    }
    return sum;
}

console.log(sumof(10));

let str = ["hi","hello","bye","!"];

function cocat(str){
    let result="";

    for(let i =0; i<str.length ;i++){
        result+=str[i];
    }
    return result;
}
