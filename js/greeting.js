const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const greeting = document.getElementById("greeting-text");

function loginSubmit(event){
    event.preventDefault();
    const username = event.value;
    console.log(event)
   
}


loginForm.addEventListener("submit", loginSubmit);