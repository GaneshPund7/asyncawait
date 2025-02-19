// Promises and async and await 

async function weather() {

    let pune = new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve("31%");

        }, 2000);
    })
    let mumbai = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("31%");
        }, 4000);
    })
 

    console.log("Please wait we are getting pune weather...");
    let puneW = await pune;
    console.log(`Pune current weather is ${puneW} do not go to pune`);

    console.log("Please wait we are getting Mumbai weather...");
    let mumbaiW = await mumbai;
    console.log(`Mumbai current weather is ${mumbaiW} Please stay in mumbai`);
    
}
weather();

// let a = weather((a)=>{
//     console.log(a); 
// })
 
async function submit(a,b) {
  try{
    let b = new Promise((re, reject)=>{
        setTimeout(()=>{
            re(20);
        },3000)
    })
    console.log(b);
    
  }catch(error){
    console.log(error.message);

  }

    try{
        if(a<=b){

            let c = await a + b;
            console.log("Addition of a and b is: ",c);
        }
    }catch(error){
     console.log("data is not getting for further process",error.message);
    }
    
}
submit(3,3);