let btn = document.querySelector("button");

btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});

btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked");
});

let input =document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log("key = ",event.key);
    console.log("code = ",event.code);
    console.log("key pressed");
}); 