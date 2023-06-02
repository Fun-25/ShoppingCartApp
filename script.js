// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

const loginPageBtn=document.getElementById("login-btn");
const signUpPageBtn=document.getElementById("signup-btn");
const message=document.getElementsByClassName("message")
const homeLink=document.getElementById("home-link")
const loginLink=document.getElementById("login-link")
const signupLink=document.getElementById("signup-link")
const cartLink=document.getElementById("cart-link")
const profileLink=document.getElementById("profile-link")





//Check if user can sign up
 function checkUserSignedup(){
    console.log("Signup button clicked")
    window.location.href="./signup/index.html"
    // if(localStorage.getItem('user')){
    //     window.location="index.html"
    //     alert("You already have an account,please login");
         
    // } else{
    //     window.location.href="./signup/index.html"
        
    // }
 }

 //Check if user can log in
function checkUserLoggedin(){
    console.log("Login button clicked")
    
    if(!localStorage.getItem('user')){
        // we are in sign up page
        // then we click profile link
       
        alert("You don't have an account, please signup");
        window.location="index.html"
        return false
    } else{
        window.location.href="login/index.html"
         return true
    }
}

//login
loginPageBtn.addEventListener('click',checkUserLoggedin);

//signup
signUpPageBtn.addEventListener('click',checkUserSignedup);

//home Page
homeLink.addEventListener("click",()=>{
    homeLink.href="index.html"
})
//login link
loginLink.addEventListener("click", ()=>{

    event.preventDefault();
    const queryString="email="+encodeURIComponent(email.value)+"&password="+encodeURIComponent(password.value);
    const loginURL="login/index.html?"+queryString
    window.location.href=loginURL;

})

//signup link
signupLink.addEventListener("click",checkUserSignedup)

//cart link
cartLink.addEventListener("click",()=>{
    if(checkUserLoggedin) window.location.href="cart/index.html"
    else window.location.href="./signup/index.html"
})

//profile link
profileLink.addEventListener("click",()=>{
    
    if(checkUserLoggedin) {
        event.preventDefault();

  const queryString = "first_name=" + encodeURIComponent(firstName.value) +
                      "&last_name=" + encodeURIComponent(lastName.value) +
                      "&password=" + encodeURIComponent(password.value);
  
  const profileURL = "profile/index.html?" + queryString;

  window.location.href = profileURL;
         
}
    else window.location.href="./signup/index.html"
})
