
const header = document.querySelector("#header")
const mainVisual = document.querySelector("#mainVisual")
const headerDepth01 = document.querySelectorAll("#gnb .depth01");
const headerDepth02 = document.querySelectorAll("#gnb .depth02");


for(i=0;i<headerDepth01.length;i++){
    const headerDepth01Arr = headerDepth01[i];
    headerDepth01Arr.addEventListener("mouseenter",function(){
        header.classList.add("on");
        for(j=0;j<headerDepth02.length;j++){
            const headerDepth02Arr = headerDepth02[j];
            headerDepth02Arr.addEventListener("mouseenter",function(){
                header.classList.add("on");
            })
        }
    });
    headerDepth01Arr.addEventListener("mouseleave",function(){
        header.classList.remove("on");
    });
}






// $("#gnb .depth01").on("mouseenter",function(){
//     $("#header").addClass("on");
// })
// $("#gnb .depth01").on("mouseleave",function(){
//     $("#header").removeClass("on");
// })
// $("#gnb .depth02").on("mouseenter",function(){
//     $("#header").addClass("on");
// })
// $("#gnb .depth02").on("mouseleave",function(){
//     $("#header").removeClass("on");
// })

// $("#header .utilMenu .depth01 a").on("mouseenter",function(){
//     $("#header .utilMenu").addClass("on");
// })
// $("#header .utilMenu .depth01 a").on("mouseleave",function(){
//     $("#header .utilMenu").removeClass("on");
// })


// header의 language 메뉴

const langKr = document.querySelector("#header .utilMenu .language .langKr");
const langEn = document.querySelector("#header .utilMenu .language .langEn");


langKr.addEventListener("click",function(){
    langEn.classList.add("on")
    langKr.classList.remove("on");
})
langEn.addEventListener("click",function(){
    langKr.classList.add("on")
    langEn.classList.remove("on");
})
// $("#header .utilMenu .language button").on("click",function(){
//     $(this).removeClass("on");
//     $(this).siblings().addClass("on");
// })


// console.log(window.scrollY);
const info = document.querySelector("#mainVisual .info");
window.addEventListener("scroll",function(){
    let sY = window.scrollY;
    // console.log(sY);
    if(sY>300){
        info.classList.add("scroll");
    }
})
// 스크롤에 따른 애니메이션효과
// let time = gsap.timeline({paused:true});
// time.from("#mainVisual ul li",{
//     opacity:0,
//     y:"100%",
//     duration:1,
//     ease:"power4.out",
//     stagger: {
//         each: 0.2
//     }
// })
// .from("#mainVisual .news",{
//     opacity:0,
//     y:"100%",
//     duration:1,
//     ease:"power4.out",
// },"-=1.7")
// .from("#mainVisual .util",{
//     opacity:0,
//     y:"100%",
//     duration:1,
//     ease:"power4.out",
// },"-=1.2");



// window.addEventListener("scroll",function(){
//     let sY = window.scrollY;
//     console.log(sY);
//     if(sY>630-200){
//         if(!mainVisual.hasClass("slide")){
//             time.restart();
//             mainVisual.addClass("slide");
//         }        
//     }
//     if(!header.hasClass("slide")){
//         header.addClass("slide");
//     }
//     else {
//         header.removeClass("slide");
//     }
// })

// $(window).on("scroll",function(){
//     let st = $(window).scrollTop();
//     console.log(st);
//     if(st>630-200){
//         if(!$("#mainVisual").hasClass("slide")){
//             time.restart();
//             $("#mainVisual").addClass("slide");
//         }        
//     }
//     if(!$("#header").hasClass("slide")){
//         $("#header").addClass("slide");
//     }
//     else {
//         $("#header").removeClass("slide");
//     }
// })