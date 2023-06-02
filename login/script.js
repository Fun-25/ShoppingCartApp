const loginBtn = document.getElementById("btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const homeLink=document.getElementById("home-link")
const loginLink=document.getElementById("login-link")

const message = document.getElementById
("message");

function VerifyUser(){
  let users=JSON.parse(localStorage.getItem("users"));
  // const userEmail=users.find(email)
    if(localStorage.getItem("email")!=email.value)
    {message.innerText="Email Id doesn't match"}
    if(localStorage.getItem("password")!=password.value){
        message.innerText="Password doesn't match"
    }
  if(localStorage.getItem("email")==email.value && localStorage.getItem("password")==password.value ){
homeLink.addEventListener("click",()=>window.location.href="index.html")
    
loginLink.addEventListener("click",()=>window.location.href="login/index.html")

signupLink.addEventListener

  }

  

}

loginBtn.addEventListener("click",VerifyUser)