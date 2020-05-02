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
    arrBox=[];


/*
바뀐 순간을 인식하지 못한다는 뜼이죠?네네네ㅔ
그런거는 event handler로 처리를 해줘야 됩니다 '_'
click event를 인식했듯이, 왠만한 모든 인터렉션은 해당하는 이벤트가 존재합니다
검색법을 알려드릴테니 검색하는데 익숙해져야되어요!
저 링크만으로 제 생각에는 충분히 가능할 것 같은데 한번 해보시게써요?
네넹 근데 저 만든거 봐주세여
왕잘함
슬랙에서 마저 얘기할꼐요~
*/

// https://html.form.guide/html-form/html-checkbox-events.html input에 event효과주는방법
// html input에 onclick="fx" 입력 js 클릭햇을경우 발생할 이벤트생성

// console.log(female.value);



// 영화예매 기본함수
function seatSetting(){
    for(let y = 0; y < yAxis; y++) {
        for (let x = 0; x < xAxis; x ++) {
            let seatLine = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
            // if(male.checked==true || female.checked==true){
            //     if(adolescent.checked==true || adult.checked==true || national.checked==true || disabled.checked==true){
            //         seatArr.push({xSeat:x,ySeat:seatLine[Math.floor(y%13)],gen:showGender,sep:showSeparate});
            //     }
            // }
            // else{
            //     seatArr.push({xSeat:x,ySeat:seatLine[Math.floor(y%13)]}); // 이쁘게 잘짰어요 이부분
            // }
            
            seatArr.push({id:"",xSeat:x,ySeat:seatLine[Math.floor(y%13)]});
            // seatArr.push({xSeat:x,ySeat:seatLine[Math.floor(y%13)],gen:showGender,sep:showSeparate});

            // 배열반복을 끝냈을 때 실행하도록 만든 if문
            if(seatArr.length===xAxis*yAxis){
                // 금액,좌석표시
                // console.log(seatArr)
                for(let i in seatArr){
                    // p태그를 append하는 방법(https://stackoverflow.com/questions/44288505/passing-in-array-data-into-div-elements)
                    const p = document.createElement("p");
                    const span = document.createElement("span");
                    // 모든좌석표시
                    p.append(`${seatArr[i].ySeat}${seatArr[i].xSeat+1}`);
                    seat.append(p);
                    // 선택한 좌석표시
                    span.append(`${seatArr[i].ySeat}${seatArr[i].xSeat+1}`);
                    selectSeat.append(span);
                        // append 문자열추가(원래있던것에 추가)
                        // innerHtml 문자열추가(원래있던것을 지우고)
                        // appendChild tag생성("p")
                    const seats = document.querySelectorAll("#lines p"),
                        showSeats = document.querySelectorAll("#selectSeat span");
                    if(seats.length===seatArr.length){
                        // console.log(seats);
                        for(let i=0;i<seats.length;i++){
                            // console.log(seats[i]);
                            // ㅋㅋ 여기서 이벤트 리스터 달아보셨네요 이거랑 사실상 똑같이 라디오도 해주면됩니다~
                            seats[i].addEventListener("click",function(){
                                seats[i].classList.toggle("click");
                                seatArr[i].id = i;
                                
                                if(seats[i].classList.contains("click")){
                                    // 좌석을 분류해줌
                                    arrBox.push(seatArr[i]);
                                    seatArr.splice(i,1,{id:i,gen:showGender,sep:showSeparate})
                                    // 선택좌석 카운트
                                    clickNum++;
                                    seats[i].index=i;
                                    showSeats[i].classList.add("show");
                                }
                                else {
                                    // console.log("제거!")
                                    let inx = seats[i].index;
                                    let findArr = arrBox.find(function(item){
                                        return item.id === inx;
                                    })
                                    console.log(findArr,"find");
                                    // arrBox.splice(findArr.id,1)
                                    seatArr.splice(inx,1,findArr);
                                    clickNum--;
                                    showSeats[i].classList.remove("show");
                                }

                                // console.log(i,seats[i].index,seatArr[i])
                                console.log(arrBox); // 클릭한 좌석의 {x,y}의 배열
                                console.log(seatArr); // 현재 좌석의 배열보여줌
                                // console.log(price);
                                // console.log(selectPrice);
                                price = 10000*clickNum;
                                console.log(selectNum);
                                selectNum.innerHTML=clickNum;
                                selectPrice.innerHTML=price;
                            })
                        }
                    }
                }
            }
        }
    }
    btn.addEventListener("click",function(){
        alert(`예매인원 총 ${clickNum}명, 결제금액 총 ${price}원`);
    })
}


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

seatSetting()



