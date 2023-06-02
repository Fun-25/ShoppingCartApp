 
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const oldpassword = document.getElementById("oldpassword");
const cfmpassword = document.getElementById("cfmpassword");
const saveBtn = document.getElementById("save-btn");
const changePasswordBtn = document.getElementById("change-password");
const logoutBtn = document.getElementById("logout")
 
 
saveBtn.addEventListener("click",()=>{
    const users = JSON.parse(localStorage.getItem("users"));

// Find the index of the user object you want to modify
const userIndex = users.findIndex(function(user) {
  return user.email ===  `${email}`; // Replace with the appropriate condition to identify the user
});

// Check if the user is found
if (userIndex !== -1) {
  // Access the user object at the specified index
  const user = users[userIndex];

  // Make the desired modifications to the user object
  user.first_name = `${firstName}`;
  user.last_name = `${lastName}`;

  // Update the users array with the modified user object
  users[userIndex] = user;

  // Update the users array in local storage
  localStorage.setItem("users", JSON.stringify(users));
}
})


