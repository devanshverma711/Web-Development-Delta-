let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted");

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});