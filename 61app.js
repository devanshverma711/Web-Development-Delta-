let h1 = document.querySelector("h1");
// h1.style.color = "red";

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color = color;
        resolve("color changed!"); 
        },delay);
    });
}

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     changeColor("yellow",1000);
// })
// .then(()=>{
//     console.log("yellow color was completed");
//     changeColor("pink",1000);
// })
// .then(()=>{
//     console.log("pink color was completed");
// })

async function demo(){
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("green",1000);
    await changeColor("pink",1000);
    await changeColor("blue",1000);
    await changeColor("orange",1000);

}


async function greet(){
    return "hello";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was :" ,result);
})
.catch((err)=>{
    console.log("promise was rejected with err : ",err);
});

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000)
//             })
//         })
//     });
// });

// setTimeout(() => {
//     h1.style.color="red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color="orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color="green";
// }, 3000);


// function saveToDb(data,sucess,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         sucess();
//     }else{
//         failure();
//     }
// }

// saveToDb(
//     "Devansh Verma",
//     ()=>{
//         console.log("Sucess : your data was saved");
//         saveToDb(
//             "Devansh",
//             ()=>{
//                 console.log("Sucess 2 : your data was saved");
//                 saveToDb(
//                     "Verma",
//                     ()=>{
//                         console.log("Sucess 3 : your data was saved");
//                     }
//                 );
//             },()=>{
//                 console.log("Failure 2 : weak connection.data not saved");
//             }
//         )
//     },()=>{
//         console.log("Failure : weak connection.data not saved");
//     }
// );

function saveToDb(data){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    return new Promise((sucess,failure)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            sucess("Sucess : your data was saved");
        }else{
            failure("Failure : weak connection.");
        }
    });
}

// saveToDb("Devansh Verma")
//     .then(()=>{
//         console.log("data 1 saved");
//         return saveToDb("hello world");
//     })
//     .then(()=>{
//         console.log("data 2 saved");
//         return saveToDb("what");
//     })
//     .then(()=>{
//         console.log("data 3 saved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     })

