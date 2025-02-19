// let i;
for(var i = 0; i< 4; i++){
setTimeout(()=>{
        console.log(i);    
    },0);
}
  i = 9;
var i = 1;
var i = 2;
var i = 3;
var i = 7;
console.log(i);


// Find Largest and second largest no from array using for loop 
let array = [1,2,3,4,5,6,7,8,9,54,3,2,22,34,55];
let largest = -Infinity;
let secondLargest = -Infinity;
let thirdLargest = -Infinity;

for(let i=0; i<array.length; i++){
    if(array[i] > largest){
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = array[i];
        
    } else if(array[i] > secondLargest && array[i] !== largest){
        secondLargest = array[i];

    }else if(array[i] > thirdLargest && array[i] !== secondLargest && array[i] !== largest){
        thirdLargest = array[i];
    }
}

console.log(largest);
console.log(secondLargest);
console.log(thirdLargest);
 


const promise1 = new Promise((resolve, reject) => {
    resolve("Success!");
    reject("this request has been rejected");
  });
  
  promise1.then((value) => {
    console.log(value);
  
  });
// function setData(){
    let data = "Failed ";
// }
  promise1.then((value,rejected) =>{
    rejected = data;
    console.log(`Hello I am ${value} in my life`);
    console.log(`Hello I am ${rejected} in my life`);

  });
  

//   what will be the output of following code 
let datas = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1)
  },2000)
})
    datas.then(function(value){
        console.log(value);
        return value += 1;
        
    })
     .then(function(value){

        console.log(value);
        return value * 2;
        
    })

     .then(function(value){

        console.log(value);
        return value * 2;
        
    })

    .then(function(value){

        console.log(value);
        return value * 4;
        
    })

    .then(function(value){
        console.log( );
        return value - 2;
        
    })

