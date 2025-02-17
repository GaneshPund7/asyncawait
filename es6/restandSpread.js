// rest and spread oprater is used in array or object into a new array of object
function sum(...numbers){
  return numbers.map((acc, num) => acc + num , 0);

}
console.log(sum(2,4,6,7,3,2));

var number = [1,2,3,4,5];
const largest = Math.max(...number);
console.log(largest);


// Rest and spread for object 
const person = [{ name:"Raj", age : 25, work: "Software Developer"},
                {name : "Prakash", age: 20, work: "Forntend Developer"}
]
console.log(person[0].name);

const person1 = { ...person, name:"Raj", age : "25", work: "Software Developer"};
console.log(person1);
// it can spread the properties of one object to the anther object

// it can use for merge one or more array into single array
let arr1 = [1,3,4,5,7,8,9];
let arr2 = [3,2,4,56,7,5];
let mergeArray = [...arr1,...arr2];
console.log(mergeArray);


