// Promise and async and await
async function SendData() {

    let userName = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Ganesh")
        }, 1000);
    })
    let password = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Ganesh@1234")
        }, 2000);
    })


    console.log("Please wait for getting user name");
      userName = await userName;
      console.log("Your user name is:", userName);

      console.log("Please wait for getting user password");
      password = await password;
      console.log(`Your password is: ${password}`);
       
}
  SendData();
// setTimeout(() => {
//     console.log(getData);
// }, 3000);



// Hoisting
 function loadData(mobileNo, password, userName) {

    try{
        setTimeout(() => {
            console.log("The employee data is: ");
             for (let key in employee) {
                console.log(key, employee[key]);
                mobileNo = employee[key];
                password = employee[key];
                userName = employee[key];
             }
            //  console.log("Your Mobile No",mobileNo);    
            //  console.log("Your Password",password);    
            //  console.log("Your userName is",userName);    
            
        }, 2000);
    }catch (error){
        throw new Error("Data can not be fatch from database");
        // console.log(error.messa);
    }
    finally{
        console.log("Thank you.. Please provide rating...");      
    }
 }
loadData();

 let employee ={
    Name: "Vaishali",
    password: "Manjusha",
    mobileNo: "7775099857"
 }


function FindLargestNo(largest) {

  setTimeout(() => {
    largest = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
          if(numbers[i] > largest){
            largest = numbers[i]
          }
        
    }
    console.log("largest No is: ", largest); 

  }, 2000);
  return largest;  
}
FindLargestNo();
// console.log(FindLargestNo(largest));
 let numbers = [1,2,3,4,54,5,66,7,7,8,44,55,7];

//  reverse string 
function reverseString(name) {
    my_name = "Shradhha";
    setTimeout(() => {
        
        let reverseName = "";
        for (let i= my_name.length - 1; i>= 0; i--) {
              reverseName += my_name[i];       
        }
        console.log("Your reverse string is :",reverseName);        
    }, 5000); 
}
reverseString();

 var my_name;

// Closure example 
function getDataFormUser(){
    let u_Name1 = "Rajesh";
    let emp_ID1 = "0111";
    let emp_Sallery1 = "35000";
   function rajeshData(u_Name,emp_ID,emp_Sallery) {
    u_Name = u_Name1;
    emp_ID = emp_ID1;
    emp_Sallery = emp_Sallery1;
    console.log(u_Name, emp_ID, emp_Sallery);
   }  
   rajeshData()
   return rajeshData;
}
let rajesh = getDataFormUser();
console.log(rajesh.u_Name);

