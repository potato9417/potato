const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function submitName(event){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askName(){
    form.classList.add("showing");
    form.addEventListener("submit",submitName);
}

function paintGreeting(text){
    greeting.classList.add("showing");
    form.classList.remove("showing");
    const time = new Date(),
        hours = time.getHours();
    // console.log(hours)
    if(hours>=6&&hours<12){
        greeting.innerText = `Good morning ${text}`;
    }
    else if(hours>=12&&hours<17){
        greeting.innerText = `Good afternoon ${text}`;
    }
    else if(hours>=17&&hours<24){
        greeting.innerText = `Good evening ${text}`;
    }
    else if(hours>=0&&hours<6){
        greeting.innerText = `Good night ${text}`;
    }
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        askName();
    }
    else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();