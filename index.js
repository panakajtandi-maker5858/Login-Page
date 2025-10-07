// MY OWN WRITTEN CODE:-

let register = document.querySelector(".register-link");
let login = document.querySelector(".login-link");
let loginpage = document.querySelector(".login");
let registerpage = document.querySelector(".register");
let close = document.querySelector(".close");
let container = document.querySelector(".container")
let lo_gin = document.querySelector(".lo-gin");

register.addEventListener("click",()=>{
console.log("Clicked");
loginpage.style.display ="none"; 
registerpage.style.display = "initial";

})

login.addEventListener("click",()=>{
console.log("Clicked");
registerpage.style.display ="none";
loginpage.style.display = "initial";
})


close.addEventListener("click",()=>{
console.log("Clicked");
container.style.display ="none";

})
lo_gin.addEventListener("click",()=>{
console.log("Clicked");
container.style.display ="flex";
registerpage.style.display ="none";
loginpage.style.display = "initial";
})