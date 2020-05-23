const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date(),
        minutes = date.getMinutes(),
        hours = date.getHours(),
        seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

    if(seconds>=0 && seconds<10){
        return clockTitle.innerText = `${hours}:${minutes}:0${seconds}`;
    }
    if(minutes>=0 && minutes<10){
        return clockTitle.innerText = `${hours}:0${minutes}:${seconds}`;
    }
    if(hours>=0 && hours<10){
        return clockTitle.innerText = `0${hours}:${minutes}:${seconds}`;
    }
}



function init(){
    getTime();
    setInterval(getTime,1000);

}


init();
