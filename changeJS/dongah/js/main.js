// new Swiper("#mainVisual .swiper-wrapper", {
//     speed: 1000,
//     effect: "fade",
//     loop: true,
//     autoPlay: {
//         delay: 3000,
//     }
// });

new Swiper("#mainVisual .mask",{
    speed: 1000,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: "#mainVisual .mask .btns .next",
        prevEl: "#mainVisual .mask .btns .pre",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const langs = document.querySelectorAll("#lang a");
const langNum = langs.length;
// console.log(langNum);

function changeLang(event){
    
    event.preventDefault();
    // console.log(event);
    this.classList.add("on");
    for(let sibling of this.parentNode.children){
        if(sibling !== this){
            sibling.classList.remove("on");
        }
    }
    console.log("ok")
}

function clickLang(){
    for(let i=0; i<langNum; i++){
        // console.log(i);
        // console.log(langs[i])
        const langArray =langs[i];

        langArray.addEventListener("click",changeLang);
    }
}

clickLang();


new fullpage("#main", {
    scrollOverflow: true,
    onLeave: function(orgin,destination){
        let idx = destination.index;
        const header = document.querySelector("#header");
        if(idx===0){
            header.classList.remove("tl");
        }
        else {
            header.classList.add("tl");
        }
    }
});


// // fullpage에서 원하는 페이지를 찾을때 onLeave: function(orgin,destination){}
// // orgin,destination은 변수이고 destination이 섹션의 위치를 알수있게 해줌
// // console.log(destination); 중에 index가 위치
// // let idx = destination.index; 를 변수로 새로 잡아서 함


const tapMenu = document.querySelectorAll("#util .depth02 .tapMenu li");
const tapMenuNum = tapMenu.length;
const tapList = document.querySelectorAll("#util .depth02 .tapList li");
const tapListNum = tapList.length;

console.log("tapMenu>>>>",tapMenu)

// const tapMenuEvent = Document.querySelectorAll("#util .depth02 .tapMenu li a");

// function defaultEvent(event){
//     EventTarget.preventDefault();
// }

// for(let i=0;i<tapMenuNum){}
// tapMenuEvent.addEventListener("click",defaultEvent);

function clickMenu(){
    for(let i=0;i<tapMenuNum;i++){
        tapMenu[i].index = i;
        tapList[i].index = i;
        tapMenu[i].addEventListener("click",function(event){
            const clickNum = this.index;
            console.log(event.target); // -> 여기안에 클릭된 이벤트의 element가 들어있습니다 이걸롤 짜봐요

            console.log(clickNum);

            if(tapList[clickNum].index===clickNum){
                this.classList.add("view");
                tapList[clickNum].classList.add("view");
                for(let sibling of this.parentNode.children){
                    if(sibling !== this){
                        sibling.classList.remove("view");
                    }
                    
                }
                for(let sibling of tapList[clickNum].parentNode.children){
                    console.log(sibling);
                    if(sibling !== tapList[clickNum]){
                        sibling.classList.remove("view");
                    }
                }
            }
            else {
                console.log("NO");
            }
        })

    }
}

clickMenu();

// let tapMenu = $("#util .depth02 .tapMenu li");
// let tapList = $("#util .depth02 .tapList li");

// tapMenu.on("click",function(){
//     let index = $(this).index();
//     // console.log(index);
//     i=index;
//     tap(i);
//     return false;
// })

// let tap = function(i){
//     tapMenu.eq(i).addClass("view");
//     tapMenu.eq(i).siblings().removeClass("view");
//     tapList.eq(i).addClass("view");
//     tapList.eq(i).siblings().removeClass("view");
// }


// // eq값은 index로 찾고 index값은 eq로 찾는다
