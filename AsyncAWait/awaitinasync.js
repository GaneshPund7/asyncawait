

async function weather() {
 
    let puneWeather = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Rainy");
        }, 2000);
    })

    let mumbaiWeather = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Cloudy");
        }, 4000);
    })
 
 

    console.log(" Please wait we are finding weather: ");
    console.log("Finding Pune weather please wait...");  
    let puneWe = await puneWeather;
    console.log("todays pune weather is : ", puneWe);

    console.log("Finding Pune weather please wait...");  
    let mumbaiWe = await mumbaiWeather;
    console.log("Todays mumbai weather is :", mumbaiWe);
    console.log();  
    return [puneWe, mumbaiWe]  
}


let a = weather().then((a)=>{
console.log(a);

})
console.log(a);


// let b = a.then();
// console.log(a);
