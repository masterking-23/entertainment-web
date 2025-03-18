const loginbtn = document.querySelector(".login-button");
const signupBtn = document.querySelector(".signup-button");

const signupLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");

const accounts = [...document.querySelectorAll(".sign-up__link")]

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const login_title = document.querySelector(".login-title")

signupLink.addEventListener("click", ()=>{
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    accounts[1].classList.add("active");
    accounts[0].classList.remove("active");
    login_title.innerHTML = "Sign up";
})

loginLink.addEventListener("click", ()=>{
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    accounts[1].classList.remove("active");
    accounts[0].classList.add("active");
    login_title.innerHTML = "Login";

})