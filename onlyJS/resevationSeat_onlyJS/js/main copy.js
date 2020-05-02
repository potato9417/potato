const xAxis = 16,
    yAxis = 13,
    seat = document.getElementById("lines"),
    selectSeat = document.getElementById("selectSeat"),
    selectPrice = document.getElementById("selectPrice"),
    selectNum = document.getElementById("selectNum"),
    btn = document.querySelector("#check .btns button"),
    male = document.getElementById("male"),
    female = document.getElementById("female"),
    separate = document.getElementsByName("separate");

// console.log(male);
    
let seatArr = [],
    price = 0,
    clickNum = 0,
    selectSeats=[],
    seatsArr=[],
    seats=[],
    gender=[],
    showGender;


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

function seatSetting(){
    for(let y = 0; y < yAxis; y++) {
        for (let x = 0; x < xAxis; x ++) {
            let seatLine = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
            seatArr.push({xSeat:x,ySeat:seatLine[Math.floor(y%13)]}); // 이쁘게 잘짰어요 이부분
            
            // 배열반복을 끝냈을 때 실행하도록 만든 if문
            
            if(seatArr.length===xAxis*yAxis){
                // 금액,좌석표시
                console.log(seatArr)
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
                                if(seats[i].classList.contains("click")){
                                    clickNum++;
                                    seats[i].index=i;
                                    showSeats[i].classList.add("show");
                                }
                                else {
                                    clickNum--;
                                    showSeats[i].classList.remove("show");
                                }
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
        alert(`예매인원 총 ${clickNum}, 결제금액 총 ${price}원`);
    })
}



male.addEventListener("click",seatSetting())
function reservation(){
    seatSetting();
}
reservation();

