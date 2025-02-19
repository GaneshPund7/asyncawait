let myName = document.getElementById("myName");
let btn = document.getElementById("my-Button");
let send = document.getElementById("send");
 
function changeSize(size) {
    function changeSizeOf(){
        myName.style.fontSize = `${size}px`;
    }
    return changeSizeOf;
    
}
let size30 = changeSize(50)

btn.addEventListener("click", function() {
    size30();
    alert("Hello Ganesh");
});


let fn = function submit(){
    alert("Hello Ganesh");
}
send.addEventListener("click", fn);