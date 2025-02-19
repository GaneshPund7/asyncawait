// // let a = 20;
// try{
//     console.log(a);
// }catch(err){
// // console.log("Please declare first a and the run code",err.message);
// throw new Error("Shanya adhi a la tr define kr",err.message);
// }

// finally{
//     console.log(`This is finally block of code which run every time`);

// }

function dividedNo(numb){
try{
    let res = 10 / numb;
    // console.log(numb);   
    if(!isFinite(res)){
        throw new Error("cannot divide by zero..!")
    }
    console.log(res);
    
}catch(error){
console.error("Error in excetion", error.message);

}finally{
    console.log("Complated the execution");
}
}
 dividedNo(9);

