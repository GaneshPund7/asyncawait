/*
Function expression 
The function expression is the feture of javascript version es6 
which allow to  pass the function to vaiable with aregument 
 
*/



const name = function (a,b){
     let c = a + b;
     
    const learn = "Javascript"
  
    console.log(`Hello guys we are learn about the ${learn}`);
    return c;
    
}

console.log(name(2,5));
