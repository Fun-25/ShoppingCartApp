 

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfmpassword = document.getElementById("cfmpassword");
const signupBtn = document.getElementById("signup-btn");
const message=document.querySelector(".message")

 

function generateToken(){
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
  let res = '';
  let length = characters.length;
  for(let i = 1; i<=16; i++){
      res += characters.charAt(Math.floor(Math.random()*length));
  }
  return res;
}

signupBtn.addEventListener("click", (event) => {
 
    event.preventDefault();
    let users=JSON.parse(localStorage.getItem("users")) || []
    if (
      firstName.value === "" ||
      lastName.value === "" ||
      email.value === "" ||
      password.value === "" ||
      cfmpassword.value === ""
    ) {
      message.innerText = "All fields are mandatory";
      return;
    }

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if(!(validateEmail(email.value))){
       
message.innerText="Email Id is invalid"
return
    }
    var existingUser = users.find(function(user) {
      return user.email === email;
    });

    if(existingUser){
      message.innerText="User with this email already exists. Please sign in instead.";  
      return; 
    }
    // if(localStorage.getItem("userData.user.email")==email.value){
    //   message.innerText="Email already exists,ple"
    // }

    if (password.value.length < 8) {
      message.innerText = "Password length must be greater than 8";
      password.focus();
      return;
    }
    if(password.value !== cfmpassword.value){
      message.innerText = "Password doesn't match";
      cfmpassword.focus();
      return;
    }
    message.innerHTML="";

    //Storing user data

    

    var user={
      first_name: firstName.value,
      last_name:lastName.value,
      email: email.value,
      password:password.value,
      confirm_password:cfmpassword.value, 
      token:generateToken()
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users))
    
    console.log(user)
     
    message.innerText="Successfully signed up!";
    message.classList.add("message")
    message.style.color="green"
     
    // const link = document.createElement('a');
    // link.href='./login.html';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  });