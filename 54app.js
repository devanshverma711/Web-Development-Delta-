let btns = document.querySelectorAll('button');
console.dir(btns);

// btn.onclick = function(){
//     console.log("button was clicked");
// }
for(btn of btns){
    // btn.onclick=sayHello;
    // btn.onmouseenter=function(){
    //     console.log("you entered a button");

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double clicked me");
    });
}


function sayHello(){
    alert("hello");
}
 
function sayName(){
    alert("Devansh");
}
 
// btn.onclick=sayHello;