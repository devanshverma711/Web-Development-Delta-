let num = [1,2,3,4];

let double = num.map((el)=>{
    return el*el;
}); 


let nums = [1,2,3,4,5,67,8,9,0,3,2];

let even = nums.filter((el)=>{
    return el%2==0;
});

let arr = [1,4,6,2,3,7,9,1,5];

let max = arr.reduce((max,el)=>{
    if(max>el){
        return max;
    }
    else{
        return el;
    }
});

let arrr = [1,2,3,4,5];

let newarr = [...arrr,...arr];
console.log(newarr);

const data ={
    email: "devans@gamoil.com",
    password:"efsfsf",
};

const dataCopy ={...data};

let obj ={
    ...arr
};

function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us: ",args[i]);
    }
}