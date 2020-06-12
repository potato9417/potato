
$("#header .util .logoutUtilBox button").on("click",()=>{
    let token = ""
    $.cookie("userToken", token);

    let userTokenCookie = $.cookie("userToken");
    if(userTokenCookie==""){
        $("#header .util").addClass("login");
        console.log("로그아웃누름")
        console.log($.cookie("userToken"))
    }
    else {
        $("#header .util .logoutUtilBox").removeClass("login");
        console.log("로그인함")
        console.log($.cookie("userToken"))
    }
})


$("#header #logo").on("click",()=>{
    location.href="./main.html";
})

$("#header .util .loginUtilBox .login").on("click",()=>{
    location.href="./login.html";
})

$("#header .util .loginUtilBox .signUp").on("click",()=>{
    location.href="./sign_up.html";
})

$("#header #gnb .depth01").on("click",()=>{
    console.log("클릭")
    location.href="./intro.html";
})
$("#header #gnb .depth02").on("click",()=>{
    console.log("클릭")
    location.href="./project.html";
})
$("#header #gnb .depth03").on("click",()=>{
    console.log("클릭")
    location.href="./myPage.html";
})

