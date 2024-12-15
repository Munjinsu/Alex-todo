const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const greeting = document.getElementById("greeting-text");
const loading = document.querySelector(".loading");
const loadingMainTit = loading.querySelector(".main_title");
const loadingBg = loading.querySelector(".bg");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    onloading(userName);
}

function onloading(username){
    loading.classList.remove(HIDDEN_CLASSNAME);
    loadingMainTit.classList.add('on');

    setTimeout(animateText, 2000);
    setTimeout(function(){
        loading.classList.add(HIDDEN_CLASSNAME);
    },3000);
    paintGreetings(username);
}

function animateText(){
    loadingBg.animate({
        width: "100%" 
        }, 1000);
}

function paintGreetings(username){
    greeting.innerText = `Hellow ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}else {
    paintGreetings(savedUsername);
}

