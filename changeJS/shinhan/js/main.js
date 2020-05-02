new fullpage("#fullpage", {
	navigation: true,
	navigationPosition: "left",
	navigationTooltips: ["COMPANY", "BUSINESS", "PR CENTER", "RECRUIT"],
	showActiveTooltip: true,
});

const mouse = document.querySelectorAll("#gnb .gnbList > li");
const header = document.querySelector("#header");
const ulTag = document.querySelectorAll("#gnb .gnbList > li> ul");
// console.log(ulTag)

const arr = [1,2,3,4]
const rever = arr.reverse();
function mouseEvent(){
    for(let i=0;i<mouse.length;i++){
        const selectMouse = mouse[i];
        selectMouse.index = i;
        ulTag[i].index=i;
        // console.log(selectMouse);
        // console.log(selectMouse.index)
        // console.log(ulTag[i].index)
        // console.log(selectMouse);
        selectMouse.addEventListener("mouseenter",function(){
            if(selectMouse.index === ulTag[i].index){
                header.classList.add("on");
                ulTag[i].classList.add("on");
                for(let siblings of this.parentNode.children){
                    siblings.classList.remove("on");
                }
            }
            else{
                ulTag[i].classList.remove("on");
            }
        })
        selectMouse.addEventListener("mouseleave",function(){
            header.classList.remove("on");
            ulTag[i].classList.remove("on");
        })
    }
}
mouseEvent();

// $("#gnb .gnbList > li").on("mouseenter",function(){
//     let index = $(this).index();
//     console.log(index);
//     $("#header").addClass("on");
//     $(this).find("ul").addClass("on");
//     $(this).siblings().find("ul").removeClass("on");
//     if(!$(this).hasClass("on")){
//         $(this).addClass("on");
//         $(this).siblings().removeClass("on");
//     }
// })
// $("#gnb .gnbList > li").on("mouseleave",function(){
//     $("#header").removeClass("on");
// })


const utilBtn = document.querySelector(".util .btns");

function utilClick(){
    utilBtn.addEventListener("click",function(){
        header.classList.toggle("click");
    })
}
utilClick()

// $(".util .btns").on("click",function(){
//     $("#header").toggleClass("click");
// })


const moreOpen = document.querySelectorAll("#mainVisual .moreBox .btnsMore .moreOpen");
const moreClose = document.querySelectorAll("#mainVisual .moreBox .btnsMore .moreClose");
const moreBox = document.querySelectorAll("#mainVisual .moreBox");
console.log(moreOpen,moreClose,moreBox)



function openEvent(){
    for(let i=0;i<moreOpen.length;i++){
        moreBox[i].index=i;
        moreOpen[i].index=i;
        const clickMoreOpen = moreOpen[i];
        console.log(moreOpen[i].index,moreBox[i].index,clickMoreOpen)
        
        clickMoreOpen.addEventListener("click",function(){
            if(moreOpen[i].index===moreBox[i].index){
                moreBox[i].classList.add("open");
                for(let siblings of this.parentNode.children){
                    siblings.classList.remove("open")
                }
            }
        })
    }
}
function closeEvent(){
    for(let i=0;i<moreClose.length;i++){
        moreBox[i].index=i;
        moreClose[i].index=i;
        const clickMoreClose = moreClose[i];
        console.log(moreOpen[i].index,moreBox[i].index,clickMoreClose)
        
        clickMoreClose.addEventListener("click",function(){
            if(moreClose[i].index===moreBox[i].index){
                moreBox[i].classList.remove("open");
            }
        })
    }
}

openEvent()
closeEvent()


// $("#mainVisual .moreBox .btnsMore .moreOpen").on("click",function(){
//     $("#mainVisual .moreBox").addClass("open");
//     return false;
// })
// $("#mainVisual .moreBox .btnsMore .moreClose").on("click",function(){
//     $("#mainVisual .moreBox").removeClass("open");
//     return false;
// })