//  the async in js which allow to run code and wait for some api call and get data
// 

console.log("hello");

function sum(a,b){
    console.log(a +b);
    
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
calculator(3,5,sum);

//  This also call back function 
// A call back is a function which is to be executed after the anter function has finish execution 
//  A callback is function is to be executed after the anther function has finish the exection 

// setTimeout(function sub(){
// let a = 20;
// let b = 40;

//     console.log(a + b);
    
// }, 2000);

// Nested if else 

let sallary = 55000;

if(sallary >= 19000){

    if( sallary >= 40000){
        console.log("You are senior developer");
        
    }else{
        console.log("You are junior developer");  
    }
}else{
    console.log("You are the intern");
    
}



//  function with async 
// function getData (dataId, getNextData){
//     setTimeout (() =>{
//         console.log("Data" , dataId);   
//         getNextData();  
//     } ,2000)
// }
// getData(1, ()=>{
//     getData(2);
// })


// async in js
let number = 39
 async function  submit(name){ 
    await name
console.log("Hello this is async function ",name);
}
submit();

