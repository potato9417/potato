const retry = document.querySelector("#cardPlace .btns .retry"),
    info = document.querySelector("#cardPlace .info"),
    card = document.querySelectorAll("#cardPlace .card ul > li"),
    game = document.querySelector("#game"),
    start = document.querySelector("#gameStart img"),
    startBG = document.querySelector("#gameStart"),
    win = document.querySelector("#gameWin");
    // console.log(card.length);

let cardArray = [],
    resultArray = [],
    cards=[],
    randomCard=[],
    finishArray = [];

// 카드를 랜덤하게 섞어주기 위한 함수 (화면으로 구현안댐..)
function random(){
    for(let i=0;i<card.length;i++){
        cards.push(card[i]);
    }
    for(i=0;i<card.length;i++){
        let randomNum = Math.floor(Math.random()*cards.length);
        randomCard.push(cards[randomNum])
        cards.splice(randomNum,1)

        document.querySelector("#game .card ul").appendChild(randomCard[i]);
        // appendChild() 자식한테 노드추가
    }
    console.log(randomCard,"===",cards)


}

// 게임 이겼을때 화면 클릭한 뒤 새로 게임 시작하기위한 이벤트
win.addEventListener("click",function(){
    for(let i=0;i<card.length;i++){
        card[i].classList.remove("click")
    }
    startBG.classList.remove("start");
    win.classList.remove("win");
})

// 게임에서 이겼을떄 나타나는 이벤트효과
function gameWin(){
    win.classList.add("win");
}

// 재시작 버튼 불렀을떄 이벤트효과
retry.addEventListener("click",function(){
    cardArray=[];
    resultArray=[];
    finishArray=[];
    for(let i=0;i<card.length;i++){
        card[i].classList.remove("click")
    }
    console.log("hi")
    startBG.classList.remove("start");
    
})

// 카드게임속 함수
function cardGame(){
    for(let i=0;i<card.length;i++){
        card[i].index=i;
        card[i].addEventListener("click",function(){
            // console.log(card[i].index,"click");
            if(resultArray.length<2){
                card[i].classList.add("click");
                cardArray.push(card[i]);
                resultArray.push(card[i].className);
                console.log(cardArray[0],cardArray[1]);
                // console.log(cardArray,cardArray.length);
                if(resultArray.length===2){
                    if(resultArray[0]===resultArray[1]){
                        finishArray.push(resultArray[0],resultArray[1]);
                        console.log(finishArray);
                        if(finishArray.length===16){
                            gameWin();
                            game.classList.remove("click");
                            console.log("finish");
                            finishArray=[];
                        }
                        cardArray=[];
                        resultArray=[];
                    }
                    else{
                        setTimeout(function(){
                            cardArray[0].classList.remove("click");
                            cardArray[1].classList.remove("click");
                            console.log("no")
                            cardArray=[];
                            resultArray=[];
                        },2000)
                        
                        
                    }
                }
            }
            
            
        })
        
    }
}

// 게임시작버틀 눌렀을때 이벤트효과
start.addEventListener("click",function(){
    startBG.classList.add("start");
    game.classList.add("click");
    random()
    cardGame()
})