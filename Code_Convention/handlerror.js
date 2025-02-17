// function and anonymouse function expresstion

// anonymouse function is allow to write in js that dose not get any name 
// that function not have name and assigne to the variable 

const addition = function(a,b){
     let c = a + b;
     return c;
}
console.log(addition(5,5));


// named function in js
// as we can define named function in js 
//  ex
const names = function name(a,b){
    // a = 30;
    // b = 10;
    return a - b;
}
console.log(names(49,6));

const factorial = function fact(n){
    // if(n == 0 ) return 1;
     if (n) return 1;
    return n * fact(n - 1);
};
console.log(factorial(4));
