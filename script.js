// Signup

function signup(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("signupPass").value;


let students =
JSON.parse(localStorage.getItem("students")) || [];


students.push({
name:name,
email:email,
password:password
});


localStorage.setItem(
"students",
JSON.stringify(students)
);


alert("Signup Successful");


window.location="login.html";

}



// Login

function login(){


let email =
document.getElementById("loginEmail").value;


let password =
document.getElementById("loginPass").value;



let students =
JSON.parse(localStorage.getItem("students")) || [];


let user =
students.find(
s=>s.email==email &&
s.password==password
);



if(user){

alert("Login Success");

window.location="dashboard.html";

}

else{

alert("Invalid Login");

}

}



// Show Password Signup

function showSignupPass(){

let p =
document.getElementById("signupPass");


if(p.type=="password")
p.type="text";

else
p.type="password";

}



// Show Password Login

function showLoginPass(){

let p =
document.getElementById("loginPass");


if(p.type=="password")
p.type="text";

else
p.type="password";

}



// Dashboard Count

if(document.getElementById("count")){


let students =
JSON.parse(localStorage.getItem("students")) || [];


document.getElementById("count")
.innerHTML=students.length;

}



// Logout

function logout(){

window.location="login.html";

}