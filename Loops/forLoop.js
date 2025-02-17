//for loop
//loops in js is use to reduce repitive task by repeadialty executing a block of code as long as specifed condition 
// the loop is block of code which is used for when we need to do same task again again or 
// repit that time
//the for loop is repeat block of code a specific no of time it contain intialization 
// condition and increment decrement in one line 

// for loop 
//for loop is used when no of itration is known

for(let i = 0; i<=5; i++){
    console.log(i); 
}


// for in loop 
// for in loop is use to itreat over the properties of an object 
//it only over the key of an object which have there enumable property set to true 

// for in loop ex
let obj = {name: "ganesh", age: 23}
for(let key in obj){
    console.log(key, obj[key]);
}

 
// for in loop only execute for object 
// for in loop only itrate over the properties of object
//for in loop is only itrate the over the proeprties of an object
let person = {
     name: "Rajesh",
     age : 25,
     role:"Software Developer",
     package: 2.4,
     performance: "good"

}
for(let key in person){
    console.log(key, person[key]);
    
}


// for of loop 
//this loop is itrate over the array like object or strings etc.

let arr = [1,3,4,5,6,77,88,8,44,3,];
for(let i of arr){
    console.log("array of value",i); 
}

// normal for loop for array
for(let i= 0; i<arr.length; i++){
console.log(arr[i]);
}


// for in loop in js is itrate over the properties of object
//for of loop in js is itrate over the array of object or string
// what is loop 
//  The loop is block of code which itrate no of time which are the given
// the for loop is itrate over the no of time and it contain intilization, condition and
// and increment decrement in one line


// print the even no using for loop 
let arrays = [2,4,5,8,7,5,43,3,6,8,9,4];
console.log(arrays);

for(let i = 0; i<arrays.length; i++){
    if(arrays[i] %2 ==0){
    console.log("This is even no:\n",arrays[i]);

}else if(arrays[i] %2 !==0){
    console.log("This is odd no:",arrays[i]);
}
}
