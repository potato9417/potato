const xAxis = 16,
    yAxis = 13,
    seat = document.getElementById("lines"),
    selectSeat = document.getElementById("selectSeat"),
    selectPrice = document.getElementById("selectPrice"),
    selectNum = document.getElementById("selectNum"),
    btn = document.querySelector("#check .btns button"),
    male = document.getElementById("male"),
    female = document.getElementById("female"),
    adolescent = document.getElementById("adolescent"),
    adult = document.getElementById("adult"),
    national = document.getElementById("national"),
    disabled = document.getElementById("disabled"),
    genderDom = document.getElementsByName("gender"),
    separateDom = document.getElementsByName("separate"),
    submit = document.querySelector("#seat .checkList .submitBox .submit"),
    checkMale = document.getElementById("checkMale");

// console.log(male);
let seatArr = [],
    price = 0,
    clickNum = 0,
    selectSeats=[],
    seatsArr=[],
    seats=[],
    gender=[],
    separate=[],
    showGender,
    showSeparate,
    arrBox=[],
    idx=0,
    makeSeat;




// 기본 좌석 배열 만드는 함수
function makeArr(){
    for(let y = 0; y < yAxis; y++) {
        for (let x = 0; x < xAxis; x++) {
            let seatLine = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
            idx++
            seatArr.push({id:idx-1,xSeat:x,ySeat:seatLine[Math.floor(y%yAxis)]});
            // 좌석세팅을 위한 배열
        }
    }
    makeSeat = seatArr.map(function(i){
        // console.log(i);
        return i;
    })
    console.log(makeSeat.length);
    
    // 좌석이 화면에 보여지게 구현
    makeSeat.forEach(function(i){
        const p =document.createElement("p");
        const span=document.createElement("span");
        // 모든좌석표시
        // console.log(i.id-1);
        console.log(i,"hihihi")
        p.append(`${makeSeat[i.id].ySeat}${makeSeat[i.id].xSeat+1}`);
        seat.append(p);
        // 선택한 좌석표시
        span.append(`${makeSeat[i.id].ySeat}${makeSeat[i.id].xSeat+1}`);
        selectSeat.append(span);
    })
    
    const seats = document.querySelectorAll("#lines p");

    seats.forEach(function(p){
        const showSeats=document.querySelectorAll("#selectSeat span");
        p.addEventListener("click",function(){
            p.classList.toggle("click");
            let getP = p.outerText
            //.outerText 태그안의 값만 얻고싶을때
            if(p.classList.contains("click")){
                clickNum++;
                showSeats.forEach(function(s){
                    let getS = s.outerText;
                    if(getS===getP){
                        s.classList.add("show");
                    }
                })
                // console.log(makeSeat)
                
                makeSeat.forEach(function(m){
                    // console.log(m.id)
                    if(seats[m.id].classList.contains("click")){
                        // console.log("this")
                        // console.log(seats[m.id],"==",m.id)
                        
                        // console.log(makeSeat[m.id],"dhdhhdh");
                        makeSeat.
                        makeSeat.splice(m.id,1,{id:m.id,gen:showGender,sep:showSeparate})
                        // makeSeat[m.id].push({id:m.id,gen:showGender,sep:showSeparate})
                        console.log(makeSeat)
                    }
                })
            }
            else{
                clickNum--;
                showSeats.forEach(function(s){
                    let getS = s.outerText;
                    if(getS===getP){
                        s.classList.remove("show");
                    }
                })
            }
            price=10000*clickNum;
            selectNum.innerHTML=clickNum;
            selectPrice.innerHTML=price;
        })
        
    })
    
}

makeArr()

// console.log(seatArr,"==",makeSeat)









// radio 클릭 이벤트(항목선택)
function clickMale(){
    gender=[];
    if(male.checked == true){
        console.log("yes")
        gender.push(male.value);
        showGender=gender[0]
        console.log(showGender);
    }
}
function clickFemale(){
    gender=[];
    if(female.checked == true){
        console.log("no")
        gender.push(female.value);
        showGender=gender[0]
        console.log(showGender);
    }
}
function clickAdolescent(){
    separate=[];
    if(adolescent.checked == true){
        console.log("yes")
        separate.push(adolescent.value);
        showSeparate=separate[0]
        console.log(showSeparate);
    }
}
function clickAdult(){
    separate=[];
    if(adult.checked == true){
        console.log("no")
        separate.push(adult.value);
        showSeparate=separate[0]
        console.log(showSeparate);
    }
}
function clickNational(){
    separate=[];
    if(national.checked == true){
        console.log("yes")
        separate.push(national.value);
        showSeparate=separate[0]
        console.log(showSeparate);
    }
}
function clickDisabled(){
    separate=[];
    if(disabled.checked == true){
        console.log("no")
        separate.push(disabled.value);
        showSeparate=separate[0]
        console.log(showSeparate);
    }
}


// checkbox 클릭 이벤트(전체선택)
function clickCheckMale(){
    // https://velog.io/@decody/map-%EC%A0%95%EB%A6%AC filter find 비교
    // find 단 하나의 요소만 반환
    // let maleArr = seatArr.find(function(item){
    //     return item.gen === "male";
    // })
    // console.log(maleArr)
    const seats = document.querySelectorAll("#lines p");
    // filter 요소를 걸러내어 배열
    // male이 포함된 배열찾기
    let maleArr = seatArr.filter(function(item){
        return item.gen === "male";
    })
    for(let i=0;i<maleArr.length;i++){
        checkID = maleArr[i].id;
        console.log(checkID)
        for(let j=0;j<seats.length;j++){
            if(seats[j].index===checkID){
                seats[j].classList.toggle("click");
            }
        }
    }
    
   
    console.log(maleArr)
    // let findArr = arrBox.find(function(item){
    //     return item.id === inx;
    // })
    // users.filter(it => new RegExp('oli', "i").test(it.name));
}
function clickCheckFemale(){
    const seats = document.querySelectorAll("#lines p");
    let femaleArr = seatArr.filter(function(item){
        return item.gen === "female";
    })
    for(let i=0;i<femaleArr.length;i++){
        checkID = femaleArr[i].id;
        for(let j=0;j<seats.length;j++){
            if(seats[j].index===checkID){
                seats[j].classList.toggle("click");
            }
        }
    }
    console.log(femaleArr)
}
function clickCheckAdolescent(){
    const seats = document.querySelectorAll("#lines p");
    let adolescentArr = seatArr.filter(function(item){
        return item.sep === "adolescent";
    })
    for(let i=0;i<adolescentArr.length;i++){
        checkID = adolescentArr[i].id;
        for(let j=0;j<seats.length;j++){
            if(seats[j].index===checkID){
                seats[j].classList.toggle("click");
            }
        }
    }
    console.log(adolescentArr)
}
function clickCheckAdult(){
    const seats = document.querySelectorAll("#lines p");
    let adultArr = seatArr.filter(function(item){
        return item.sep === "adult";
    })
    for(let i=0;i<adultArr.length;i++){
        checkID = adultArr[i].id;
        for(let j=0;j<seats.length;j++){
            if(seats[j].index===checkID){
                seats[j].classList.toggle("click");
            }
        }
    }
    console.log(adultArr)
}
function clickCheckNational(){
    const seats = document.querySelectorAll("#lines p");
    let nationalArr = seatArr.filter(function(item){
        return item.sep === "national";
    })
    for(let i=0;i<nationalArr.length;i++){
        checkID = nationalArr[i].id;
        for(let j=0;j<seats.length;j++){
            if(seats[j].index===checkID){
                seats[j].classList.toggle("click");
            }
        }
    }
    console.log(nationalArr)
}
function clickCheckDisabled(){
    const seats = document.querySelectorAll("#lines p");
    let disabledArr = seatArr.filter(function(item){
        return item.sep === "disabled";
    })
    for(let i=0;i<disabledArr.length;i++){
        checkID = disabledArr[i].id;
        for(let j=0;j<seats.length;j++){
            if(seats[j].index===checkID){
                seats[j].classList.toggle("click");
            }
        }
    }
    console.log(disabledArr)
}



