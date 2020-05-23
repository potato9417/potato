const body = document.querySelector("body");

function showImg(imgNum){
    const img = new Image();
    img.src = `../images/${imgNum}.jpg`;
    body.appendChild(img);
}

function random(){
    const num = Math.floor(Math.random()*5)+1;
    return num;
}

function init(){
    const randomNum = random();
    showImg(randomNum);
}
init();